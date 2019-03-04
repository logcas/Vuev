<template>
  <div class="l-date-picker" v-clickoutside="hidePicker" ref="selector">
    <l-input @focus="isShowPicker = true" ref="dateInput" readonly :value="inputValue"></l-input>
    <transition name="fade">
      <div :class="['l-date-selector', {'show-on-bottom': showOnBottom }]" v-show="isShowPicker">
        <div class="header">
          <div class="before-btn" @click="getLastMonth">&lt;</div>
          <div class="after-btn" @click="getNextMonth">&gt;</div>
          <span class="date">{{Month}}月 - {{currentYear}}</span>
        </div>
        <table class="date-list">
          <thead>
            <td v-for="(w,index) in weeks" :key="index">{{w}}</td>
          </thead>
          <tbody @click="pickDate">
            <tr v-for="(row, index) in dateList" :key="index">
              <td
                v-for="(d, key) in row"
                :key="key"
                class="date"
                :class="{
                'not-current-month': d.month !== currentMonth,
                'today': isToday(d.year, d.month, d.date),
              }"
                :data-year="d.year"
                :data-month="d.month"
                :data-date="d.date"
              >{{ d.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import clickOutSide from "@/directives/clickoutside";

const DATE_LIST_ROWS = 6; // 日期表行数
const DATE_LIST_COLUMNS = 7; // 日期表列数
const MONTHS = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二"
];

export default {
  name: "l-date-picker",
  components: { "l-input": Input },
  directives: { clickoutside: clickOutSide },
  props: {
    value: String,
    hideAfterPick: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      showOnBottom: false, // 是否从下方显示picker
      isShowPicker: false, // 控制显隐
      weeks: ["日", "一", "二", "三", "四", "五", "六"],

      dateList: [], // 日期列表，用二维数组表示
      lastMonthLastDate: "", // 上个月最后一天是几号
      currentYear: "", // 当前选择年
      currentMonth: "", // 当前选择月(0-11)
      currentDate: "", // 当前选择日
      currentMonthFirstDay: "", // 当前月份第一天是星期几
      currentMonthDates: "", // 当前月份一共有几天
      inputValue: "",

      todayYear: "", // 今年
      todayMonth: "", // 今月
      todayDate: "" // 今日
    };
  },
  computed: {
    Month() {
      return MONTHS[this.currentMonth];
    },
  },
  methods: {
    pickDate(e) {
      if(e.target.tagName.toLowerCase() !== 'td') return;
      const { year, month, date } = e.target.dataset;
      let datePicked = new Date(year, month, date);
      this.$emit('input', datePicked);
      this.inputValue = `${year} - ${+month+1} - ${date}`;
      if(this.hideAfterPick) this.isShowPicker = false;
    },
    hidePicker(e) {
      this.isShowPicker = false;
    },
    // 是否今天
    isToday(y, m, d) {
      return (
        y === this.todayYear && m === this.todayMonth && d === this.todayDate
      );
    },
    // 获取上个月
    getLastMonth() {
      --this.currentMonth;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        --this.currentYear;
      }
      this.getBasicData();
      this.getDateList();
    },
    // 获取下个月
    getNextMonth() {
      ++this.currentMonth;
      if (this.currentMonth >= 12) {
        this.currentMonth = 0;
        ++this.currentYear;
      }
      this.getBasicData();
      this.getDateList();
    },
    // 重新计算data
    getBasicData() {
      this.currentMonthFirstDay = new Date(
        this.currentYear,
        this.currentMonth,
        1
      ).getDay();
      this.currentMonthDates = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();
      this.lastMonthLastDate = new Date(
        this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear,
        this.currentMonth === 0 ? 12 : this.currentMonth,
        0
      ).getDate();
    },
    // 计算日期列表
    getDateList() {
      // 计算第一行
      // 先计算上个月还有多少天放到第一行
      this.dateList = [];
      let firstTmp = [];
      for (
        let i = 0, j = this.lastMonthLastDate - this.currentMonthFirstDay + 1;
        i < this.currentMonthFirstDay;
        ++i, ++j
      ) {
        firstTmp.push({
          year:
            this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear,
          month: this.currentMonth === 0 ? 11 : this.currentMonth - 1,
          date: j
        });
      }
      // 然后把剩下的补上
      let date = 1;
      for (
        let i = this.currentMonthFirstDay;
        i < DATE_LIST_COLUMNS;
        ++i, ++date
      ) {
        firstTmp.push({
          year: this.currentYear,
          month: this.currentMonth,
          date: date
        });
      }
      this.dateList.push(firstTmp);
      // 计算剩下的列
      let nextMonthDate = 1;
      for (let r = 1; r < DATE_LIST_ROWS; ++r) {
        let tmp = [];
        for (let i = 0; i < DATE_LIST_COLUMNS; ++i, ++date) {
          if (date > this.currentMonthDates) {
            tmp.push({
              year:
                this.currentMonth === 11
                  ? this.currentYear + 1
                  : this.currentYear,
              month: this.currentMonth === 11 ? 0 : this.currentMonth + 1,
              date: nextMonthDate
            });
            ++nextMonthDate;
          } else {
            tmp.push({
              year: this.currentYear,
              month: this.currentMonth,
              date: date
            });
          }
        }
        this.dateList.push(tmp);
      }
    }
  },
  created() {
    let today = new Date();
    this.todayYear = today.getFullYear();
    this.todayMonth = today.getMonth();
    this.todayDate = today.getDate();
    if(!this.value) {
      this.currentYear = this.todayYear;
      this.currentMonth = this.todayMonth;
      this.currentDate = this.todayDate;
    } else {
      let thatDay = new Date(this.value);
      this.currentYear = thatDay.getFullYear();
      this.currentMonth = thatDay.getMonth();
      this.currentDate = thatDay.getDate();
    }
    this.getBasicData();
    this.getDateList();
  },
  mounted() {
    // 输入上方空间不足，则从输入框下方显示，但默认为上方。
    this.showOnBottom = this.$refs.selector.getBoundingClientRect().top >= 300 ? false : true;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/common.scss";

$primary: #6190e8;
$border: #eee;
$shadow: #eef0f0;

$fontSize: 14px;
$titleColor: #2c405a;
$textColor: #3f536e;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.l-date-picker {
  position: relative;
  display: inline-block;

  .l-date-selector {
    display: block;
    position: absolute;
    top: -295px;
    left: 0;
    min-height: 295px;
    min-width: 248px;
    background: #fff;
    border: 1px solid $border;
    border-radius: 5px;
    transition: all 0.2s linear;
    z-index: 99;

    &.show-on-bottom {
      top: 40px;
    }

    font-size: 14px;

    &:hover {
      box-shadow: 0 0 2px 2px $shadow;
    }

    .header {
      overflow: hidden;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: $textColor;
      .before-btn {
        float: left;
        margin-left: 10px;
      }
      .after-btn {
        float: right;
        margin-right: 10px;
      }
      .before-btn,
      .after-btn {
        cursor: pointer;
        user-select: none;
      }
    }

    .date-list {
      td {
        text-align: center;
        width: 35px;
        height: 35px;
        user-select: none;
        cursor: pointer;

        &.date:hover {
          background: $primary;
          color: #fff;
        }

        &.not-current-month {
          color: rgb(206, 205, 205);
        }

        &.today {
          color: $primary;
        }
      }
    }
  }
}
</style>

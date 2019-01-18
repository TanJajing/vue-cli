<template>
<div class="infos">
  <el-tabs type="border-card">
    <!-- 获取的富文本信息 -->
    <el-tab-pane label="商品描述">
    </el-tab-pane>
    <el-tab-pane label="参数及包装">
      <h4 class="title">规格参数</h4>
      <div v-if="modelDetail" class="div-table">
        <p v-for="item in modelDetail.modelDetail" :key="item.attrId">
          <label>{{item.attrName}}</label>
          <span>{{item.attrValue}}</span>
        </p>
      </div>
      <h4 class="title">包装清单</h4>
      <div v-if="modelDetail" class="div-table">
        <p v-for="item in modelDetail.modelDetail" :key="item.attrId">
          <label>包装清单</label>
          <span>手机x1，电源配置器x1，USB数据线x1，取卡针x1，擦拭布x1，软胶保护壳x1，屏幕贴膜x1，用户使用手册x1</span>
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="优惠政策">
    </el-tab-pane>
    <el-tab-pane label="服务信息">
      <div>
        <h4 class="title">售后信息</h4>
        <div class="content">
          <h5>社会渠道买断故障机退换流程</h5>
          <p>社会渠道买断终端出现性能类开箱损及三星以外品牌的15天换机,原则上由社会渠道自行在当地厂商售后网点处理。区域营销中心售后人员接受社会渠道售后相关的咨询，对当地社会渠道换机进行引导，并在社会渠道和厂商售后网点的对接过程中做好协调工作。</p>
        </div>
        <div class="content">
          <h5>社会渠道非性能类开箱机退换流程</h5>
          <p>1、社会渠道经销商在收货后应立即进行验货，如发现运输途中出现外箱损伤，需对该箱终端详细验机。如在收货当时发现明显物流损伤，应拒收并要求物流人员直接退回省仓换货。如已收货后发现上述问题，应在到货48小时内联系对应区域的营销中心，由区域营销中心及时以邮件的形式反馈至售后中心，并将全套故障机退回售后中心。</p>
          <p>2、售后中心对社会渠道退机进行初步检查，如符合开箱机标准，并确认渠道商到货时间符合申请要求后，通知省仓补发新机给社会渠道。不符合开箱机标准退回社会渠道。</p>
          <p>3、社会渠道买断终端退换过程中产生物流费用，均由寄出方承担。,原则上由社会渠道自行在当地厂商售后网点处理。区域营销中心售后人员接受社会渠道售后相关的咨询，对当地社会渠道换机进行引导，并在社会渠道和厂商售后网点的对接过程中做好协调工作。</p>
        </div>
        <div class="content">
          <h5>社会渠道三星检测工单换机流程</h5>
          <p>1、社会渠道将三星售后网点检测换机工单寄到售后中心，并附带回寄联系人、联系方式、回寄地址信息。</p>
          <p>2、售后中心在收到检测工单的两个工作日内，登录三星厂商系统确认换机，收到厂商返回的新机头后寄还给对应社会渠道。</p>
        </div>
      </div>
      <div class="mt20">
        <h4 class="title">物流说明</h4>
        <div class="content">
          <h5>社会渠道买断故障机退换流程</h5>
          <p>1、社会渠道将三星售后网点仅支持顺丰物流</p>
          <p>2、售后中心在收到检测工单的两个工作日内，登录三星厂商系统确认换机，收到厂商返回的新机头后寄还给对应社会渠道。</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="报价">
      <h4 class="title">商品报价趋势</h4>
      <div id="myChart" :style="{width: '1200px', height: '310px'}"></div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ItemInfos',
  data () {
    return {
      option: {
        color: ['#31B3EC'],
        xAxis: {
          data: ['7-30', '8-17', '9-02', '9-18', '10-04', '10-20', '11-05'],
          nameTextStyle: {
            color: '#999'
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          }
        },
        yAxis: {
          name: '价格(元)',
          type: 'value',
          min: 600,
          max: 1500,
          nameTextStyle: {
            color: '#999'
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }]
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      anotherStatic: {
        preferentialPolicyUrl: '',
        packingListContentUrl: '',
        contractDescUrl: ''
      }
    };
  },
  mounted () {
    this.drawLine();
  },
  computed: {
    ...mapState({
      modelDetail: ({ itemDetail }) => itemDetail.modelDetail,
      anotherAtaticList: ({ itemDetail }) => itemDetail.anotherAtaticList,
      judgement4P: ({ itemDetail }) => itemDetail.judgement4P
    })
  },
  beforeMount () {
    this.queryAnotherStatic(this.anotherStatic);
    this.queryModelDetail({skuId: 82257, catLogId: 10203});
    this.queryJudgement4P({skuId: 82257, index: 1, pageSize: 5});
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption(this.option);
    },
    ...mapActions(['queryModelDetail', 'queryAnotherStatic', 'queryJudgement4P'])
  }
};
</script>

<template>
  <footer class="footer">
    <!-- 顶部服务 -->
    <div class="service-section">
      <div class="service-item">
        <!-- <img src="@/assets/icons/all-categories.png" alt="图标" /> -->
        <span  style="user-select: none;">品类齐全，轻松购物</span>
      </div>
      <div class="service-item">
        <!-- <img src="@/assets/icons/multiple-warehouses.png" alt="图标" /> -->
        <span  style="user-select: none;">多仓直发，极速配送</span>
      </div>
      <div class="service-item">
        <!-- <img src="@/assets/icons/authentic-products.png" alt="图标" /> -->
        <span  style="user-select: none;">正品行货，精致服务</span>
      </div>
      <div class="service-item">
        <!-- <img src="@/assets/icons/discounts.png" alt="图标" /> -->
        <span  style="user-select: none;">天天低价，畅选无忧</span>
      </div>
    </div>

    <!-- 中间导航部分 -->
    <div class="footer-nav">
      <div class="nav-column">
        <h3  style="user-select: none;">购物指南</h3>
        <ul>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="下单"></el-step>
                <el-step title="物流"></el-step>
                <el-step title="收货"></el-step>
              </el-steps>
              <a href="#" slot="reference">购物流程</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>成为我们的会员，尊享多重福利：购物享会员折扣，部分商品低至5折；每月领取专属优惠券，省钱更轻
              松；积分抵现，每笔消费都能兑换超值好礼；还有生日特权、会员日加倍积分及优先参与新品预售等专属权
              益。加入即送新人礼包，升级更高等级还可解锁免邮、专属客服等VIP服务。立即注册，开启您的尊享购物
              体验！</p>
              <a href="#" slot="reference">会员介绍</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>购物选会员折扣，轻装出行更自在；提前列好清单，享受当地特色。积分抵现省旅费，灵
                活规划慢旅行。用优惠买快乐，以体验代纪念，让每段旅程都超值！</p>
              <a href="#" slot="reference">生活旅行</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>Q：如何退换货？A：7天内凭订单号办理。Q：运费谁承担？A：非质量问题由买家承担。Q：会员积分怎么用？A：可兑换优
                惠券或抵现。Q：发货时间？A：下单后1-3个工作日内。更多问题请联系客服</p>
              <a href="#" slot="reference">常见问题</a>
            </el-popover>
          </li>
          <li><a href="#">联系客服</a></li>
        </ul>
      </div>
      <div class="nav-column">
        <h3  style="user-select: none;">配送方式</h3>
        <ul>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>选择自提更便捷！下单时勾选附近自提点，商品到货后会短信通知。凭订单号和身份证即可取货，无需等待配送。部分商品自提享额外折扣，
                还能现场验货更放心。营业时间一般为9:00-20:00，超3天未取将自动退货。推荐无接触购物或急需用品的顾客选择！</p>
              <a href="#" slot="reference">上门自提</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>上午11点前下单，当天晚上11点前送达；晚上11点前下单，次日上午11点前送达！覆盖超百万商品，迟到必赔。生鲜、日用品急速配送，
                满足紧急需求。部分偏远区域或特殊商品除外，具体以结算页提示为准。准时达，快人一步！</p>
              <a href="#" slot="reference">上门自提</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>物流跟踪：下单后可在「我的订单」实时查询物流信息，包括配送员联系方式。  
                时效查询：输入收货地址，商品详情页自动显示预估送达时间。             
                范围确认：偏远地区或特殊商品（如大件）需人工审核，下单前可联系客服确认。             
                异常处理：延迟或丢件可通过在线客服一键申报，24小时内反馈解决方案。</p>
              <a href="#" slot="reference">配送服务查询</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>基础运费：订单满XX元免邮，未满额收取X元基础运费（具体金额以结算页为准）。
                 特殊商品：大件/生鲜/跨境商品按重量或体积阶梯收费，详见商品页标注。
                 加急服务：选择“定时达”“夜间配”等增值服务，需加收X-X元。
                 偏远地区：西藏、新疆等部分区域可能产生额外运费，下单自动计算。
                 注：会员享免邮特权/运费券抵扣，具体以账户权益为准</p>
              <a href="#" slot="reference">配送费收取标准</a>
            </el-popover>
          </li>
        </ul>
      </div>
      <div class="nav-column">
        <h3  style="user-select: none;">支付方式</h3>
        <ul>
          <li><a href="#">货到付款</a></li>
          <li><a href="#">在线支付</a></li>
          <li><a href="#">分期付款</a></li>
          <li><a href="#">公司转账</a></li>
        </ul>
      </div>
      <div class="nav-column">
        <h3  style="user-select: none;">售后服务</h3>
        <ul>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>退换规则：商品未拆封/不影响二次销售，支持7天无理由退换（特殊商品除外）。
                 质量问题：15天内提供免费退换或维修，需上传凭证审核。
                 保修服务：大家电享1年保修，部分品类延保需单独购买。
                 流程指引：通过APP提交申请→快递取件/上门检测→退款至原支付账户。
                 注：定制类、生鲜等商品不支持无理由退换，详情见《售后细则》。</p>
              <a href="#" slot="reference">售后政策</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>保障范围：下单后7天内若商品降价，可申请补差（需满足平台价保商品条件）。
                 自动价保：系统实时监测价格变动，差价将自动退回原支付账户（限部分商品）。
                 手动申请：在「订单详情」点击“申请价保”，系统秒级审核到账。
                 除外情况：限时活动、抢购、赠品促销等特殊场景不参与，详情见规则页。
                 注：钻石会员享15天价保期，部分商品延至30天。</p>
              <a href="#" slot="reference">价格保护</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>退款条件：
                 符合退换政策的订单，退款将在审核通过后原路退回。
                 优惠券/积分支付部分按规则返还（有效期不变）。
                 到账时效：
                 线上支付：1-5个工作日（信用卡/花栗等需3-7天）。
                 货到付款：需提供银行卡信息，人工处理约5-10天。
                 进度查询：在「订单详情」或「钱包余额」实时跟踪。
                 注：若超时未到账，请联系客服并提供交易单号核查。</p>
              <a href="#" slot="reference">退款说明</a>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <p>申请条件
                 退换货：商品需保持完好（未拆封/不影响二次销售），7天内可申请（部分商品如生鲜、定制类除外）。
                 返修：质保期内非人为损坏，提供故障凭证（照片/视频）审核。
                 操作流程
                 线上提交申请 → 审核通过后生成退货码 → 快递上门取件或自行寄回（运费按责任方承担）。
                 处理时效
                 退换货：收货后3个工作日内完成验货退款。
                 返修：检测确认后7-15个工作日内寄回（紧急需求可申请加急）。
                 注：会员享优先审核、免费上门取件服务（详询等级权益）。</p>
              <a href="#" slot="reference">返修/退换货</a>
            </el-popover>
          </li>
          <li><a href="#">取消订单</a></li>
        </ul>
      </div>
    </div>

    <!-- 底部版权信息 -->
    <div class="copyright">
      <p>
        关于我们 | 联系我们 | 联系客服 | 合作招商 | 营销中心 | 手机商城 | 友情链接 | 销售联盟 | 优好购社区
      </p>
      <p>
        京公网安备 *************号 京ICP证*******号 优好购版权所有
      </p>
      <p>Copyright © 2025-2025 优好购版权所有</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  color: #666;
  text-align: center;
  padding: 20px 0;
}

.service-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  font-size: 14px;
}

.footer-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.nav-column {
  margin: 0 15px;
}

.nav-column h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.nav-column ul {
  list-style: none;
  padding: 0;
}

.nav-column li {
  line-height: 2;
}

.nav-column a {
  color: #666;
  text-decoration: none;
}

.nav-column a:hover {
  text-decoration: underline;
}

.copyright {
  font-size: 12px;
  color: #999;
  line-height: 2;
}

a:hover {
  color: rgb(9, 93, 249); 
}

a{
  cursor: pointer;
}
</style>

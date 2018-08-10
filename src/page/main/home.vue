<template>
<div class="layui-fluid">
<div class="layui-row layui-col-space15">
  <div class="layui-col-md8">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md6">
        <div class="layui-card">
          <div class="layui-card-header">快捷方式</div>
          <div class="layui-card-body">

            <div class="layui-carousel layadmin-carousel layadmin-shortcut" lay-anim="" lay-indicator="inside" lay-arrow="none" style="width: 100%; height: 280px;">
              <div carousel-item="">
                <ul class="layui-row layui-col-space10 layui-this">
                  <li class="layui-col-xs3">
                    <a lay-href="component/layer/list">
                      <i class="layui-icon layui-icon-website"></i>
                      <cite>弹层</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="component/button/">
                      <i class="layui-icon layui-icon-find-fill"></i>
                      <cite>按钮</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="component/progress/">
                      <i class="layui-icon layui-icon-loading-2"></i>
                      <cite>进度条</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/senior/im/">
                      <i class="layui-icon layui-icon-chat"></i>
                      <cite>聊天</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="component/panel/">
                      <i class="layui-icon layui-icon-read"></i>
                      <cite>面板</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="component/badge/">
                      <i class="layui-icon layui-icon-tree"></i>
                      <cite>徽章</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/system/website">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>网站设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/password">
                      <i class="layui-icon layui-icon-password"></i>
                      <cite>密码</cite>
                    </a>
                  </li>
                </ul>
                <ul class="layui-row layui-col-space10">
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                  <li class="layui-col-xs3">
                    <a lay-href="/set/user/info">
                      <i class="layui-icon layui-icon-set"></i>
                      <cite>设置</cite>
                    </a>
                  </li>
                </ul>

              </div>
            <div class="layui-carousel-ind"><ul><li class="layui-this"></li><li></li></ul></div><button class="layui-icon layui-carousel-arrow" lay-type="sub"></button><button class="layui-icon layui-carousel-arrow" lay-type="add"></button></div>

          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <div class="layui-card">
          <div class="layui-card-header">待办事项</div>
          <div class="layui-card-body">

            <div class="layui-carousel layadmin-carousel layadmin-backlog" lay-anim="" lay-indicator="inside" lay-arrow="none" style="width: 100%; height: 280px;">
              <div carousel-item="">
                <ul class="layui-row layui-col-space10 layui-this">
                  <li class="layui-col-xs6">
                    <a lay-href="" class="layadmin-backlog-body">
                      <h3>待审评论</h3>
                      <p><cite>66</cite></p>
                    </a>
                  </li>
                  <li class="layui-col-xs6">
                    <a lay-href="" class="layadmin-backlog-body">
                      <h3>待审帖子</h3>
                      <p><cite>12</cite></p>
                    </a>
                  </li>
                  <li class="layui-col-xs6">
                    <a lay-href="" class="layadmin-backlog-body">
                      <h3>待审商品</h3>
                      <p><cite>99</cite></p>
                    </a>
                  </li>
                  <li class="layui-col-xs6">
                    <a lay-href="" class="layadmin-backlog-body">
                      <h3>待发货</h3>
                      <p><cite>20</cite></p>
                    </a>
                  </li>
                </ul>
                <ul class="layui-row layui-col-space10">
                  <li class="layui-col-xs6">
                    <a lay-href="" class="layadmin-backlog-body">
                      <h3>待审友情链接</h3>
                      <p><cite style="color: #FF5722;">5</cite></p>
                    </a>
                  </li>
                </ul>
              </div>
            <div class="layui-carousel-ind"><ul><li class="layui-this"></li><li></li></ul></div><button class="layui-icon layui-carousel-arrow" lay-type="sub"></button><button class="layui-icon layui-carousel-arrow" lay-type="add"></button></div>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">数据概览</div>
          <div class="layui-card-body">

            <div class="layui-carousel layadmin-carousel layadmin-dataview" data-anim="fade" lay-filter="LAY-index-dataview" lay-anim="fade" lay-indicator="inside" lay-arrow="none" style="width: 100%; height: 280px;">
              <div carousel-item="" id="LAY-index-dataview">
                123456
              </div>
            <div class="layui-carousel-ind"><ul><li class=""></li><li class=""></li><li class="layui-this"></li></ul></div><button class="layui-icon layui-carousel-arrow" lay-type="sub"></button><button class="layui-icon layui-carousel-arrow" lay-type="add"></button></div>

          </div>
        </div>
        <div class="layui-card">
          <div class="layui-tab layui-tab-brief layadmin-latestData" style="width: 100%; height: 100%;">
            <ul class="layui-tab-title">
              <li class="layui-this">今日热搜</li>
              <li>今日热帖</li>
            </ul>
            <div class="layui-tab-content">
              <div class="layui-tab-item layui-show">
                123
              </div>
              <div class="layui-tab-item">
                456
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="layui-col-md4">
    <div class="layui-card">
      <div class="layui-card-header">版本信息</div>
      <div class="layui-card-body layui-text">
        <table class="layui-table">
          <colgroup>
            <col width="100">
            <col>
          </colgroup>
          <tbody>
            <tr>
              <td>当前版本</td>
              <td>
                <script type="text/html" template="">
                  V1.1.1
                  <a href="http://fly.layui.com/docs/3/" target="_blank" style="padding-left: 15px;">更新日志</a>
                </script> v1.0.0-beta9 pro <a href="http://fly.layui.com/docs/3/" target="_blank" style="padding-left: 15px;">更新日志</a>
              </td>
            </tr>
            <tr>
              <td>基于框架</td>
              <td>
                <script type="text/html" template="">
                  layui-v123
                </script> layui-v2.2.6
             </td>
            </tr>
            <tr>
              <td>主要特色</td>
              <td>单页面 / 响应式 / 清爽 / 极简</td>
            </tr>
            <tr>
              <td>获取渠道</td>
              <td style="padding-bottom: 0;">
                <div class="layui-btn-container">
                  <a href="http://www.layui.com/admin/" target="_blank" class="layui-btn layui-btn-danger">获取授权</a>
                  <a href="http://fly.layui.com/download/layuiAdmin/" target="_blank" class="layui-btn">立即下载</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="layui-card">
      <div class="layui-card-header">效果报告</div>
      <div class="layui-card-body layadmin-takerates" style="height:100%">
        <div class="layui-progress" lay-showpercent="yes">
          <h3>转化率（日同比 28% <span class="layui-edge layui-edge-top" lay-tips="增长" lay-offset="-15"></span>）</h3>
          <div class="layui-progress-bar" lay-percent="65%" style="width: 65%;"><span class="layui-progress-text">65%</span></div>
        </div>
        <div class="layui-progress" lay-showpercent="yes">
          <h3>签到率（日同比 11% <span class="layui-edge layui-edge-bottom" lay-tips="下降" lay-offset="-15"></span>）</h3>
          <div class="layui-progress-bar" lay-percent="32%" style="width: 32%;"><span class="layui-progress-text">32%</span></div>
        </div>
      </div>
    </div>

    <div class="layui-card">
      <div class="layui-card-header">实时监控</div>
      <div class="layui-card-body layadmin-takerates">
        <div class="layui-progress" lay-showpercent="yes">
          <h3>CPU使用率</h3>
          <div class="layui-progress-bar" lay-percent="58%" style="width: 58%;"><span class="layui-progress-text">58%</span></div>
        </div>
        <div class="layui-progress" lay-showpercent="yes">
          <h3>内存占用率</h3>
          <div class="layui-progress-bar layui-bg-red" lay-percent="90%" style="width: 90%;"><span class="layui-progress-text">90%</span></div>
        </div>
      </div>
    </div>

  </div>

</div>
</div>
</template>

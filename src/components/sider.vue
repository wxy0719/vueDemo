<template>
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree"  lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
                <a class="" href="javascript:;">子组件样例</a>
                <dl class="layui-nav-child">
                    <dd>
                      <router-link :to="'/system/dataTable'">数据表格</router-link>
                    </dd>
                    <dd>
                      <router-link :to="'/system/tree_1'">树形菜单</router-link>
                    </dd>
                    <dd>
                      <router-link :to="'/system/tab'">选项卡</router-link>
                    </dd>
                </dl>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;">解决方案</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">列表一</a></dd>
                    <dd><a href="javascript:;">列表二</a></dd>
                    <dd><a href="">超链接</a></dd>
                </dl>
            </li>
        </ul>
    </div>

</div>
</template>

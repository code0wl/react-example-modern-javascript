# React注意事项
-------------
>JSX 的基本语法规则
<P>遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。</P>

>组件语法
<ol>
<li>组件只支持一个顶层元素，亦即每个组件只有一个根元素</li>
<li>组件类的第一个字母必须大写，否则会报错</li>
<li>对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性，它表示组件的所有子节点。为了简化对子节点类型的判断，推荐使用React.Children
	<code>
	React.Children.map(this.props.children, function (child) {
		return <li>{child}</li>;
	})
	</code>
</li>
<li>state表示组件的内在状态，props表示组件向外开发的属性，于Vue props及data功能类似。</li>
</ol>

>组件的生命周期
组件的生命周期分成三个状态：
<ol>
<li>Mount：已插入真实DOM</li>
<li>Update：正在被重新渲染</li>
<li>Unmount：已移出真实DOM</li>
</ol>

>组件间的通信


入门教程请参考<a href="http://www.ruanyifeng.com/blog/2015/03/react.html">React入门实例教程</a>
https://shellmonger.com/2015/08/17/building-an-es6jsxreact-flux-app-part-2-the-flux/
#淘宝登录页找茬

[点击进入找茬网页“淘宝登录页”](https://login.taobao.com/member/login.jhtml?spm=a21bo.50862.754894437.1.ewyFYD&f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F)

最大的问题：**语义化**，几乎所有标签都是`<div>`

##1. 总体结构的语义化

`header`, `footer`都是在`div`里用`id`来表征

* 头部

	```<div id="header">...</div>```
	
	**改：**```<header>...</header>```

* 页脚

	```<div id="footer">...</div>```
	
	**改：**```<footer>...</footer>```
	
##2. 元素内部的语义化

```
<div id="footer">
<div id="footer-hd">...</div>
<div id="footer-bd">...</div>
<div id="footer-ft">...</div>
</div>
```

**改：**在元素内部也可以分`header`，`footer`

```
<footer>
<header>...</header>
<div id="footer-bd">...</div>
<footer>...</footer>
</footer>
```

##3.登录框form的问题

```
<form>
<div>...</div>
<div>...</div>
</form>
```

**改：**用`<p>`标签包裹`lable`和`input`

```
<form>
<p>...</p>
<p>...</p>
</form>
```

##4. footer链接分隔

![Alt text](./1481177554829.png)

![Alt text](./1481177617705.png)

如上图所示，用`<b>`标签包裹`｜`，建立分隔，从效果上看，挺好的，但是`<b>`标签表示粗体文本，明显没有分隔的意思。如果要做分隔，可以用`<hr>`，但是默认情况下是水平线，可以给`<hr>`加一个`class`，设置合适的样式。可能会更符合意思。

---------------

### 我的小疑惑
* 语义化与写起来容易相比，怎么权衡呢？比如第四条，用`<b>`标签包裹`｜`，建立分隔。虽然意思不合适，但是写起来更简便，这个时候有必要语义化吗？




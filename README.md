## 介绍
自动在链接前面显示该链接对应的网站 logo，目前支持 36 个站点，包括知乎、微博、豆瓣、Twitter、Facebook 等，后期会持续增加。具体支持网站见 `src/icons.json`。

## DEMO

[demo](https://sinchang.github.io/links-icon/demo.html)

## 使用

```
<script type="text/javascript" src="./dist/links-icon.min.js"></script>
<script type="text/javascript">
    // element 代表所有 a 链接的最外层容器，如 `document.getElementById('body')`
    new LinkIcon(element)
</script>
```

## 感谢

- [Simple Icons](https://github.com/danleech/simple-icons)
- [iconfont](http://iconfont.cn/)

## License

[MIT](http://opensource.org/licenses/MIT)

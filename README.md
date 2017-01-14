## 介绍
自动在链接前面显示该链接对应的网站 logo，目前支持 36 个站点，包括知乎、微博、豆瓣、Twitter、Facebook 等，后期会持续增加。具体支持网站见 `src/icons.json`。

## DEMO

[demo](https://sinchang.github.io/link-icon/demo.html)

## 使用

```
<script type="text/javascript" src="./dist/links-icon.min.js"></script>
<script type="text/javascript">
    // name 代表链接最外层容器的 id 或者 class，type 只可选择 `class` 或者 `id`
    new LinkIcon(name, type)
</script>
```

## 感谢

- [Simple Icons](https://github.com/danleech/simple-icons)
- [iconfont](http://iconfont.cn/)

## License

[MIT](http://opensource.org/licenses/MIT)

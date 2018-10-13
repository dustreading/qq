serviceID: {
  "1": "渲染图片元素<picture>这里可以用各种样式，属性修饰元素如style/color/bg等，支持渲染，但是下一个<item>里只能有一个<summary>，可以包括<hr>",
  "4/6/23": "渲染视频元素<video>这里不可以有各种样式，不支持各种元素渲染，一个<msg>支持家多个<item>但不支持渲染"
}

layout: {
  "2": "三宫格布局，最多指定单个子元素，用在<item>元素中",
  "6": "流式布局，可以存在多个子元素，也就是说可以存在多个<title><summary>等"
}

style: {
  "1": "粗体/可以不加"
}

msg: {
  "item": "一个<msg>元素代表一条消息，里面可以有多个<item>元素"
}

item: {
  "属性": {
    "layout": "决定了一个<item>元素里面的内容的布局",
    "bg": "指定一个<item>元素的背景色，使用#FF0000，貌似图片链接无效？"
  },
  "子节点": {
    "title/summary": "这两个貌似标配",
    "video": "当<msg serviceID='4'>的时候可以用",
    "picture": "当<msg serviceId='1'>的时候可以用"
  }
}

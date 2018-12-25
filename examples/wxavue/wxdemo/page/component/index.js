import Vue from '../../../../../dist/wxavue.js'
import './index.css'

var type = [
  'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
];

export default Vue.Page({
  data: {
    viewShow: false,
    contentShow: false,
    formShow: false,
    interactShow: false,
    navShow: false,
    mediaShow: false,
    mapShow: false,
    canvasShow: false
  },
  widgetsToggle: function (e) {
    console.log(e);

    var id = e.currentTarget.id, data = {};
    for (var i = 0, len = type.length; i < len; ++i) {
      data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
  },
  template: `
    <view class="index">
      <view class="head">
        <view class="title">小程序组件</view>
        <view class="desc">这是展示小程序组件的DEMO。</view>
      </view>
  
      <view class="body">
        <view class="widgets">
  
          <view class="widgets__item">
            <view id="view" class="widgets__info {{viewShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">内容分区</text>
              <image class="widgets__info-img" src="../../image/resources/kind/view.png" background-size="cover" />
            </view>
  
            <view class="widgets__list {{viewShow ? 'widgets__list_show' : ''}}">
              <navigator url="component-pages/wx-view/wx-view" class="widget">
                <text class="widget__name">view</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-scroll-view/wx-scroll-view" class="widget">
                <text class="widget__name">scroll-view</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-swiper/wx-swiper" class="widget">
                <text class="widget__name">swiper</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
              </navigator>
            </view>
  
          </view>
          <view class="widgets__item">
            <view id="content" class="widgets__info {{contentShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">内容</text>
              <image class="widgets__info-img" src="../../image/resources/kind/content.png" background-size="cover" />
            </view>
            <view class="widgets__list {{contentShow ? 'widgets__list_show' : ''}}">
              <navigator url="component-pages/wx-text/wx-text" class="widget">
                <text class="widget__name">text</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-icon/wx-icon" class="widget">
                <text class="widget__name">icon</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-mask/wx-mask" class="widget">
                <text class="widget__name">mask</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-toast/wx-toast" class="widget">
                <text class="widget__name">toast</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-progress/wx-progress" class="widget">
                <text class="widget__name">progress</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
              </navigator>
            </view>
          </view>
          <view class="widgets__item">
            <view id="form" class="widgets__info {{formShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">表单组件</text>
              <image class="widgets__info-img" src="../../image/resources/kind/form.png" background-size="cover" />
            </view>
            <view class="widgets__list {{formShow ? 'widgets__list_show' : ''}}">
              <navigator url="component-pages/wx-button/wx-button" class="widget">
                <text class="widget__name">button</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-checkbox/wx-checkbox" class="widget">
                <text class="widget__name">checkbox</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-form/wx-form" class="widget">
                <text class="widget__name">form</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-input/wx-input" class="widget">
                <text class="widget__name">input</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-label/wx-label" class="widget">
                <text class="widget__name">label</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-picker/wx-picker" class="widget">
                <text class="widget__name">picker</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-radio/wx-radio" class="widget">
                <text class="widget__name">radio</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-slider/wx-slider" class="widget">
                <text class="widget__name">slider</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-switch/wx-switch" class="widget">
                <text class="widget__name">switch</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
              </navigator>
            </view>
          </view>
          <view class="widgets__item">
            <view id="interact" class="widgets__info {{interactShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">交互组件</text>
              <image class="widgets__info-img" src="../../image/resources/kind/interact.png" background-size="cover" />
            </view>
            <view class="widgets__list {{interactShow ? 'widgets__list_show' : ''}}">
              <navigator url="component-pages/wx-action-sheet/wx-action-sheet" class="widget">
                <text class="widget__name">action-sheet</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                <view class="widget__line"></view>
              </navigator>
              <navigator url="component-pages/wx-modal/wx-modal" class="widget">
                <text class="widget__name">modal</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
              </navigator>
            </view>
          </view>
  
          <view class="widgets__item">
            <view id="nav" class="widgets__info {{navShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">导航</text>
              <image class="widgets__info-img" src="../../image/resources/kind/nav.png" background-size="cover" />
            </view>
            <view class="widgets__list {{navShow ? 'widgets__list_show' : ''}}">
              <navigator url="component-pages/wx-navigator/wx-navigator" class="widget">
                <text class="widget__name">navigator</text>
                <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
              </navigator>
            </view>
          </view>
          <view class="widgets__item">
            <view id="media" class="widgets__info {{mediaShow ? 'widgets__info_show' : ''}}" bindtap="widgetsToggle">
              <text class="widgets__info-name">媒体</text>
              <image class="widgets__info-img" src="../../image/resources/kind/media.png" background-size="cover" />
            </view>
            <view class="widgets__list {{mediaShow ? 'widgets__list_show' : ''}}">
              <view class="widgets__list-inner {{mediaShow ? 'widgets__list-inner_show' : ''}}">
                <navigator url="component-pages/wx-image/wx-image" class="widget">
                  <text class="widget__name">image</text>
                  <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                  <view class="widget__line"></view>
                </navigator>
                <navigator url="component-pages/wx-audio/wx-audio" class="widget">
                  <text class="widget__name">audio</text>
                  <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                  <view class="widget__line"></view>
                </navigator>
                <navigator url="component-pages/wx-video/wx-video" class="widget">
                  <text class="widget__name">video</text>
                  <image class="widget__arrow" src="../../image/resources/arrow.png" background-size="cover" />
                </navigator>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  `
});

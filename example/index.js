import 'primer-base'
import Preloader from '../src/preloader'

const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222231&di=4f80a210225dde88b5618c731a1e246b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F20181%2F22%2F201812213450_krXJB.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553956938&di=9fbf49c0783e78f2462bbc9cc1e2d79f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F549d0b3df2989.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222250&di=6043b6d7673d19faa7272c55f46ca54b&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201409%2F12%2F20140912213717_vwRSj.png',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222248&di=860e26fc828de99474de43aae3d1b959&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180118%2Ff621b7983a644e209d112bffe4573887.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222247&di=2d3f1680219565390a7b55cbc119b26e&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F3Z6kBDpL8I6LD4ibgrllyortnQOJG3QjsPAcLMuBuIrcwiajbhe9YfU5Zqtia84gUCqXLcc6ZMRicI1fQdhlaELqvw%2F640%3Fwx_fmt%3Djpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222239&di=b7f94ae9c80c017d41bcf64ade4d90fd&imgtype=0&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201505%2F16%2F20150516164554_iLfen.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222236&di=ae8dc7830df43885c5d6f7c8b028e8cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F21%2F20150721205235_uvFJB.thumb.700_0.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222221&di=d14d3099b1c0f73cebfc9ec2b8b52949&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8b66a3b254d2451ffad6f33df35e5c51a90086cbd471-7XqyXt_fw658',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222218&di=dbabb7c12716774384ee48679e97b161&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F14%2F20151114174120_QXJW8.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222214&di=04fb37d445f0bd3dc17458150150392c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F13%2F20140813233731_5fezv.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222192&di=6bf9ca8da9ceae7bcaa040f935d04431&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F6d4569ebgy1fhl0o0g8vij21jk1jk4fo.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222171&di=87175945633357365b39373fdcf07b4b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F03%2F20141203182419_f4Vdm.jpeg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3355339011,957128584&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222150&di=671a9dfb46a1de16b0a5171f62be754a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F28%2F20161028192309_uTxNY.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222108&di=72ed6f9230e17d090e1667f4592b7531&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170411%2F9bc2859963d34c73ac7ea990943a0af1_th.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222099&di=aa932129839d571f56b562a23253d306&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F980d560ffd592497f362fb0838795fc4efe60f97aa94-Q53bT8_fw658',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222084&di=95917ff0578c9bd99dd5dfbef5f068a6&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201602%2F27%2F20160227202623_2fTuR.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222082&di=bab45479a08c19266801a5f5ff068bf1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F13%2F20140813233515_Ge43P.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362222080&di=d1af40c76eb1dd0d333fd2bc3a7a65cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F24%2F20130924120600_2iz2x.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362769354&di=05df900639dd11f46ac3e4b037f85b0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F02%2F20180902202439_mhxxe.thumb.700_0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1616032749,1121253573&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934775&di=973b296d890ee962e13e7fec96cce3a7&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2FegjtE_-V4f%2FEgfWEgbwetfUe_bve_MtETUw5Mqc6v5u4H9Eh_H5E6iOgVsEguMT4hj.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934773&di=52336f6895a1c966f29dde87d2d8a3db&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Ffab7c22c15d2dd63fa4a5220e9afef875f09bbad.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934769&di=354ee0b78f8c2d74d4cde4e672564567&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Ff733e6bd053ea39e80d9a6b20c8e3192d546c0e6.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553363045574&di=1f2a039deedb7700c00739a445b5f3ac&imgtype=jpg&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170204%2F672f3ac98748497a8ff6dd553d2d82ca_th.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934766&di=b2a4a9237761df0f17e8b857ad7f61de&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F45fbd2882ac40a01d5860daa0f027cd47ac2783a.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934764&di=323657c34c554da8b2bce3f95ae7ab26&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4b4c999abd1c55f72c0d463512019c2ac76962a8bf662-VaSsTK_fw658',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553362934762&di=710dcb3acd8178efbb7d89ca5faa6585&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F12d6330a38deddcd98b7a3061a80675123591772.png'
]

const successPage = document.querySelector('.page.success')
const loadingPage = document.querySelector('.page.loading')

const loader = new Preloader(imgs)

loader.listen('progress', (val) => {
  loadingPage.querySelector('.progress').innerHTML = `${val}%`
  loadingPage.querySelector('.progress-line').style.width = `${val}%`
})
loader.load().then(() => {
  loadingPage.style.display = 'none'
  successPage.style.display = 'flex'
})

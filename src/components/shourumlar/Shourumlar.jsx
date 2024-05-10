import { GoArrowUpRight } from "react-icons/go";

const Shourumlar = () => {
  return (
    <div className="shourumlar container">
        <h3>Shourumlar</h3>
        <div className="shourumlar_box">
          <p>O'zbekiston bo'ylab rasmiy shourumlar</p>
           <div className="shourumlar_box_btn">
             <button>Toshkent</button>
             <button>Batafsil <GoArrowUpRight className='open open_none'></GoArrowUpRight></button>
           </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Yandex Карты</a>
      <a href="https://yandex.uz/maps/?ll=69.286438%2C41.366769&mode=routes&rtext=~41.366920%2C69.286444&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1715718480&utm_medium=mapframe&utm_source=maps&z=7" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Yandex Карты</a>
      <iframe src="https://yandex.uz/map-widget/v1/?ll=69.286438%2C41.366769&mode=routes&rtext=~41.366920%2C69.286444&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1715718480&z=7" width="100%" height="600" frameBorder="1" allowFullScreen={true} style={{ position: 'relative' }}></iframe>
    </div>
        {/* <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A1b58d5222685095e071ae3ba53e2cfa45ff58ae666679f5ae74590fcdf0f32c6&amp;source=constructor&amp;ll=69.178618%2C41.277130&amp;z=15.97" width="100%" height="600" frameborder="0"></iframe> */}
    </div>
  )
}

export default Shourumlar
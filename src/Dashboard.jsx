import './App.css'
import Navbar from "./components/Nav/Admin"
import Mainimg from './components/Main/Mainimg'
import BestSeller from './components/best/BestSeller'
import Recomended from './components/Recom/Recomended'
import Event from './components/Eve/Event'
import Footer from './components/Foot/Footer'




const Dashboard = ()=> {

  const eventData = {
    title: ' Les Miserables',
    author: 'Victor Hugo',
    date: 'Aug 28, 2024, 9:00 PM',
    place: '403 - 59 Glenforest Drive, Halifax, NS, CA',
    img: 'https://th.bing.com/th/id/R.2b48b8559d069f3e100929357f3e042d?rik=FrHwLA02cfSslQ&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f81C0pvVrxTL.jpg&ehk=GsExa%2bYoKVynLu9tXws%2fKI1soLbiCfG8dNpWfwlB2wM%3d&risl=&pid=ImgRaw&r=0',
  };

 


  return (
    <>
      <Navbar/>
      <Mainimg />
      <BestSeller />
      <Recomended />
      <Event {...eventData} />
      <Footer />
    </>
  )
}

export default Dashboard
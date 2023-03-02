import './App.css';

function App() {
  
  const serviceArr = [
   'Masonry', 'ICF', 'Precast Facades',
   'GFRC', 'Architecturel Cladding', 'Paving'
  ]
  
  return (
    <div className="App">
      <header className="header">
         <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=70&iH=34&oX=0&oY=0&cW=70&cH=34/AK-Logo-e1553201138782.png' />
         <p style={{color:'#b70000'}}>Home</p>
         <p>About Us</p>
         <p>Project </p>
         <p>Services</p>
         <p>Safety</p>
         <p>Careers</p>
         <p>Contact</p>
      </header>
      <section className='section1'>
        <div className='buildingImage'>
            <p>Insert Slogan Here</p>
            <span style={{color:'#b70000'}}>Since 2004</span>
        </div>
        <div className='color' style={{ display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#b70000', height:'800px', opacity:0.7, color:'white', marginBottom:0}}>
                <p style={{marginTop:0, marginBottom:30, fontSize:'500%'}}>We Build Quality</p>
                <p style={{ fontSize:'250%', width:'40%', marginLeft:'30%'}}>Insert Mission Statement Here(filler text to make this look better)</p>
                <p style={{fontSize:'250%', marginBottom:0}}>Learn More>></p>
        </div>
      </section>
      <section className='section2'>
          <div className='projectBackground' style={{ width:'100%', height:'1000px', backgroundSize:'100%', backgroundRepeat:'no-repeat', paddingTop:100}}>
             <div className='projectContainer' style={{ display:'flex', justifyContent:'space-between', height:'700px', backgroundColor:'white', width:'80%', position:'relative', backgroundRepeat:'no-repeat', marginLeft:'10%', marginTop:0, paddingLeft:'2%', opacity:0.8}}>
               <div style={{}}>
                 <div className='projectTitle'>
                    <p style={{margin:0, fontSize:'300%', color:'#b70000' , paddingRight:'65%'}}>Featured Projects</p>
                 </div>
                 <div className='projectImages' style={{width:'50%', opacity:1}}>
                    <img src='https://sawebfilesprod001.blob.core.windows.net/images/Untitled%20design%20(5)-2.png?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=ckoT07MeavoWWJ5qBso4t0rHKm%2FGXdMWIVa8%2Bt9eRIE%3D' style={{height:'400px', width:'700px', }}/>
                    <img src='https://sawebfilesprod001.blob.core.windows.net/images/LVA_05102022-67.jpg?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=v6kNi9fYsdpQzftneBzAV9ap16%2F8rKFIJ%2Bw4OZnnwps%3D' style={{height:'90px', width:'120px'}}/>
                    <img src='https://sawebfilesprod001.blob.core.windows.net/images/LVA_05102022-28.jpg?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=5j91iSLhGI1NRSoBPHlGHKrrYO%2B49zKvGBY9pjeX0AA%3D' style={{height:'90px', width:'120px', paddingLeft:'1%'}}/>
                    <img src='https://www.fiberlock.com/dev/wp-content/uploads/Las-Vegas-Academy-184r.jpg' style={{height:'90px', width:'120px', paddingLeft:'1%'}}/>
                    <img src='https://live.staticflickr.com/6097/6261834411_19e8bf50e6_b.jpg'style={{height:'90px', width:'120px', paddingLeft:'1%'}}/>
                 </div>
               </div>
               <div width>
                   <p style={{fontSize:'130%', margin:0, paddingRight:'100%', paddingTop:'170%', }}>Insert Project details</p>
               </div> 
             </div>
          </div>
          <div className='serivcesBackround' style={{marginTop:-100, backgroundSize:'100%', height:'800px'}}>
            <p style={{paddingTop:'2%', fontSize:'400%', marginTop:0, marginBottom:0}}>Services</p>
            <div className='serivcesContainer' style={{display:'flex', marginLeft:'10px', justifyContent:'space-evenly', flexWrap:'wrap',}}>
            {serviceArr.map(item =>{
              return(
                <div className='projectContainer' style={{backgroundColor:'white', width:'30%', marginTop:'5%', opacity:0.8}}>
                  <p style={{fontSize:'300%'}}>{item}</p>
                </div>
              )
            })} 
            </div> 
          </div>   
      </section>
      <section className='section3'>
          <p style={{fontSize:'200%', color:'#b70000'}}>Associations</p>
          <div className='associationsContainer' style={{display:'flex', justifyContent:'space-evenly'}}>
             <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=85&iH=102&oX=0&oY=0&cW=85&cH=102/logo-sirq2.jpg'/>
             <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=137&iH=34&oX=0&oY=0&cW=137&cH=34/BudMahaslogo.png'/>
             <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=137&iH=86&oX=0&oY=0&cW=137&cH=86/COPlog.png'/>
             <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=137&iH=43&oX=0&oY=0&cW=137&cH=43/Layton-Logo.png'/>
             <img src='https://www.akmasonryllc.com/wp-content/uploads/brizy/8/assets/images/iW=137&iH=51&oX=0&oY=0&cW=137&cH=51/hoganlogo.png'/>
          </div>
      </section>
      <footer>
         <div className='infoContainer' style={{display:'flex', justifyContent:'center'}}>
              <p>Contact Us</p>
         </div>
         <div className='info' style={{display:'flex', justifyContent:'center'}}>
           <p>(801)-523-4880</p>
           <p style={{marginLeft:'10px'}}>Email@gmail.com</p>
         </div>  
      </footer>
    </div>
  );
}

export default App;

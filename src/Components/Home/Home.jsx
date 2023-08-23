import React from 'react';

const Home = () => {
    return (
        <div>
           <nav>
           <div className="carousel w-full h-96 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.swisswatchexpo.com/images/banner-home.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src="https://waltonbd.com/image/catalog/category-banner/mobile/nexg-n70.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src="https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/july2023/sprint_women_campaign_1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkJqTpn14h8v3EGIaQa7WQ3wKziVefAdzTg&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
          </div> 
           </nav>
           <section id='catagories'>
            <h2 className='text-center text-4xl pt-16 mt-16 pb-16 mb-16 text-indigo-900'>PRODUCT CATEGORY</h2>
            <div className='flex items-center p-y pb-16 mb-16'>
            <div className='w-25 p-10'>
              <img src="./../../../src/assets/display.jpg" className='w-full' alt="" />
            </div>
            <div>
              <h2 className='text-center text-3xl p-5 text-indigo-800'>Products with quality</h2>
              <p className='text-center p-12 pt-8 text-cyan-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iusto accusantium dolorum impedit illum possimus ad placeat ducimus id, facilis reprehenderit molestiae repudiandae, at architecto explicabo optio! Reprehenderit velit nam mollitia praesentium perferendis nulla.</p>
              <button className="m-auto pr-8 pl-8 block btn btn-outline  btn-primary rounded-full ">See More</button>

            </div>
            </div>
           </section>
           <section id='details'>
            <h2 className='text-center text-3xl  pb-16 mb-16 text-indigo-900 underline underline-offset-8'>Learn Details</h2>
            <div className='flex items-center justify-around p-8 pb-16 mb-40 mt-26'>
            <div>
             <div className="card card-side bg-base-100 shadow-xl mb-16">
               <figure><img src="./../../../src/assets/mobile.jpeg" alt="Movie"/></figure>
               <div className="card-body">
                 <h2 className="card-title">New movie is released!</h2>
                 <p>Click the button to watch on Jetflix app.</p>
                 <div className="card-actions justify-end">
                   <button className="btn btn-primary">see more</button>
                   </div>
                   </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="./../../../src/assets/mobile.jpeg" alt="Movie"/></figure>
                <div className="card-body">
                 <h2 className="card-title">New movie is released!</h2>
                 <p>Click the button to watch on Jetflix app.</p>
                 <div className="card-actions justify-end">
                   <button className="btn btn-primary">learn more</button>
                 </div>
               </div>
               </div>
            </div>
            <div>
            <div className="card card-side bg-base-100 shadow-xl mb-16">
                <figure><img src="./../../../src/assets/mobile.jpeg" alt="Movie"/></figure>
               <div className="card-body">
                 <h2 className="card-title">New movie is released!</h2>
                 <p>Click the button to watch on Jetflix app.</p>
                 <div className="card-actions justify-end">
                   <button className="btn btn-primary">learn more</button>
                 </div>
                 </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl">
               <figure><img src="./../../../src/assets/mobile.jpeg" alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                   <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                <button className="btn btn-primary">see more</button>
                 </div>
                  </div>
               </div>
             </div>
            </div>
           </section>

        </div>
    );
};

export default Home;
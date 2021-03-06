import React from 'react';
import Header from './header';
import Footer from './footer';
import 'antd/dist/antd.css';
import {Icon} from 'antd';
export default class About extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
          activeItem: {
            homeActive: false,
            storeActive:false,
            contactActive: false,
            aboutActive: true,
          },
        }
    }
    render()
    {
        return(
            <div>
              <Header activeItem={this.state.activeItem}/>
  <div className="site-blocks-cover inner-page" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto align-self-center">
          <div className=" text-center">
            <h1>About Us</h1>
            <p>We are a startup that works to aid to the medical needs of all. We deliver genuine and verified medicines and health supplememnts at your doorstep. You name it, we get it for you.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="block-16">
            <figure>
              <img src="images/bg_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
            </figure>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-5">
          <div className="site-section-heading pt-3 mb-4">
            <h2 className="text-black">How We Started</h2>
          </div>
          <p>We started in 2015 as a medicine delivery via phone from local medical stores across the Bay Area in CA. Soon we realised that medicine delivery was a real need of today's generation. In 2017 we began expanding and launched our websites got retailers involved across entire California. The system went viral and we received more orders than expected. We currently have over 500 office employees, 10000 delivery executives and 2500 medical stores registered.</p>
          <p>With a fast life of 21st century, people don't have to run to medical stores when we are there for them. With our subscriptions there's no missing out on medicines at emergencies.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom  aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <div className="block-16">
            <figure>
              <img src="images/hero_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
            </figure>
          </div>
        </div>
        <div className="col-md-5 mr-auto">
          <div className="site-section-heading pt-3 mb-4">
            <h2 className="text-black">We Are Trusted Company</h2>
          </div>
          <p className="text-black">With over 50000 regular customers and growing we are a rapidly growing startup. Every medicine that we deliver is checked by our executives for expiry details. Our retailers are only verified sellers.</p>
          <p className="text-black">Customer satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section site-section-sm site-blocks-1 border-0 aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay>
          <div className="icon mr-4 align-self-start">
            <Icon type="medicine-box" style={{fontSize: '30px'}}/>
          </div>
          <div className="text">
            <h2>Free Shipping</h2>
            <p>We offer free shiiping on orders over 499 as well as monthly subscriptions. For instant delivery we charge a nominal fee to pay our executives.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon mr-4 align-self-start">
            <Icon type="reload" style={{fontSize: '30px'}}/>
          </div>
          <div className="text">
            <h2>Free Returns</h2>
            <p>Hassle free returns and replacements.*</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon mr-4 align-self-start">
            <Icon type="customer-service" style={{fontSize: '30px'}}/>
          </div>
          <div className="text">
            <h2>Customer Support</h2>
            <p>We have 24*7 customer hotline and support. Customer satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 site-section-heading text-center pt-4">
          <h2>The Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/1.jpeg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Sayangdipto Chakraborty</h3>
                <p className="block-38-subheading">CEO/Co-Founder</p>
              </div>
              <div className="block-38-body">
                <p>As one of the co-founders of GetMeds, I lead the technical team and also assist in our business development. Beyond the lines of profit and loss, I wish to expand GetMeds to provide medicines to the needy soon. I am devoted to my work, but on my off days you will find me hooked on to a book or some TV series.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/2.jpeg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Shahryar Saify</h3>
                <p className="block-38-subheading">Co-Founder</p>
              </div>
              <div className="block-38-body">
                <p>Quirky with a tinge of humour, I'm a foodie, movie buff, naturalist and a peripatetic all rolled into one. Dabbling with technology is my passion, and I founded GetMeds as a way to help people through it. My aim: to make quality healthcare available to the really needy. Got any crafty suggestions ? Feel free to reach out!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/3.jpeg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Sohini Bhattacharya</h3>
                <p className="block-38-subheading">Marketing</p>
              </div>
              <div className="block-38-body">
                <p>I lead the marketing team at GetMeds. I manage advertising as well. I am interested in nurturing ideas which benefit the society</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/4.jpeg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Anurita Ghosh</h3>
                <p className="block-38-subheading">Sales Manager</p>
              </div>
              <div className="block-38-body">
                <p>I manage sales and reports at GetMeds. I am a fun-loving, friendly and an extremely optimistic person. I love traveling and exploring new places and meeting people from different cultures. My hobbies include reading novels, painting and dancing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

        )
    }
}
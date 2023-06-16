import { spiralArrow } from "../assets/AllImages";
import { HeroImg } from "../assets/AllImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {db} from "../Auth/Firebase"
import {collection , addDoc} from "firebase/firestore";
import Button from "./button";
function Hero() {
  const [state,setState] = useState(false);
  const handleClick = () => {
    setHead("मेड_कार्ट में आपका स्वागत है।");
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [doctor, setDoctor] = useState('')
  const [time, setTime] = useState('')

  const storeUserData = async (name,email,phone,address,gender,doctor,time,message) => {
    const docRef = await addDoc(collection(db, "Appointment"), {
 name,email,phone,address,gender,doctor,time,message
});
console.log("Document written with ID: ", docRef.id);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    storeUserData(name,email,phone,address,gender,doctor,time,message)
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
    setGender('')
    setDoctor('')
    setTime('')
    setMessage('')
  }
  
  return (
    <section className="my-16 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col gap-7 md:flex-row items-center justify-between">
        {/* First Section */}
        <div
          className="font-gilroyRegular max-w-[600px] xl:max-w-[700px]"
          data-aos="fade-in"
        >
          <p className="text-gray-400 text-left">
            Absolutely Hot Collections🔥
          </p>
          <div className="flex flex-col gap-6 relative">
            <h1 className="text-3xl sm:text-5xl xl:text-7xl leading-[1.2] my-6 font-gilroyBold text-left ">
            Medcart is India’s leading digital consumer healthcare platform.{" "}
              <span className="span">Products</span>
            </h1>
            <img
              src={spiralArrow}
              alt=""
              className="h-10 w-10 self-end absolute right-12 bottom-0 -z-10 xl:w-20 xl:h-20"
            />
          </div>
          <p className="text-gray-400 text-left lg:text-xl">
          <b>Medkart Pharmacy helps people who buy medicines regularly by providing them access to genuine generic medicines at discounted prices.</b>
          </p>
          {
            state?(<h1 className="text-4xl">मेड_कार्ट में आपका स्वागत है|</h1>):(<h1 className="text-4xl">Welcome To Our Med_Cart</h1>)
          }
          <div className="flex flex-col gap-5 mt-10 sm:flex-row lg:max-w-[500px]">
            <button onClick={()=>setState(true)} className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded">Explore Now</button>
            
          </div>
        </div>
        
        <div className="w-full max-w-[500px]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
      <br></br>
      <section className="section2">
          
          <h1 className="text-4xl text-center">Our Responsibilities</h1>
      <div className="cards">
        <div className="card">
          <i className="fa fa-medkit"></i>
          <h1>Qualified Doctors</h1>
          <p>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</p>
        </div>
        <div className="card">
          <i className="fa fa-certificate"></i>
          <h1>Certified Services</h1>
          <p>Healthspring members have access to a doctor 24x7, face-to-face and over a call, especially in case of a medical emergency, wherein our doctor reaches your place in the shortest time possible with an Ambulance and a fully-equipped medical emergency kit.</p>
        </div>
        <div className="card">
          <i className="fa fa-stethoscope"></i>
          <h1>Advanced Equipment</h1>
          <p>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</p>
        </div>
        <div className="card">
          <i className="fa fa-heartbeat"></i>
          <h1>Emergency Service</h1>
          <p>Hospitals have emergency departments that provide immediate medical attention to individuals with severe injuries, sudden illnesses, or life-threatening conditions.</p>
        </div>
      
      </div>

      </section>
      
      {/* updated */}

      {/* <section class="featured-doctors"> */}
  {/* <!-- Nested Container Starts --> */}
  {/* <div class="container2">
    <h2><span class="lite">Meet Our</span> Doctors</h2>
    <p>
      Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
      over the years, sometimes by accident.
    </p>
    <div class="row"> */}
          
      {/* <!-- Doctor Bio #1 Starts --> */}
      {/* <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="bio-box">
          <div class="profile-img">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Doctor" class="img-responsive img-center-sm img-center-xs img-fluid d-block"/>
            <div class="overlay">
              <ul class="list-unstyled list-inline sm-links">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="inner">
            <h5>Dr. Tom Smith Bert</h5>
            <p class="designation">Surgeon</p>
            <p class="divider"><i class="fa fa-plus-square"></i></p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book.
            </p>
          </div>
          <a href="doctor-profile.html" class="btn btn-transparent inverse text-uppercase">Book An Appointment</a>
        </div>
      </div> */}
      {/* <!-- Doctor Bio #1 Ends --> */}

      {/* <!-- Doctor Bio #2 Starts --> */}
      {/* <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="bio-box">
          <div class="profile-img">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Doctor" class="img-responsive img-center-sm img-center-xs"/>
            <div class="overlay">
              <ul class="list-unstyled list-inline sm-links">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="inner">
            <h5>Dr. Tom Smith Bert</h5>
            <p class="designation">Surgeon</p>
            <p class="divider"><i class="fa fa-plus-square"></i></p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book.
            </p>
          </div>
          <a href="doctor-profile.html" class="btn btn-transparent inverse text-uppercase">Book An Appointment</a>
        </div>
      </div> */}
      {/* <!-- Doctor Bio #2 Ends --> */}

      {/* <!-- Doctor Bio #3 Starts --> */}
      {/* <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="bio-box">
          <div class="profile-img">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Doctor" class="img-responsive img-center-sm img-center-xs"/>
            <div class="overlay">
              <ul class="list-unstyled list-inline sm-links">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="inner">
            <h5>Dr. Tom Smith Bert</h5>
            <p class="designation">Surgeon</p>
            <p class="divider"><i class="fa fa-plus-square"></i></p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book.
            </p>
          </div>
          <a href="doctor-profile.html" class="btn btn-transparent inverse text-uppercase">Book An Appointment</a>
        </div>
      </div> */}
      {/* <!-- Doctor Bio #3 Ends --> */}

      {/* <!-- Doctor Bio #4 Starts --> */}
      {/* <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="bio-box">
          <div class="profile-img">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Doctor" class="img-responsive img-center-sm img-center-xs"/>
            <div class="overlay">
              <ul class="list-unstyled list-inline sm-links">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="inner">
            <h5>Dr. Tom Smith Bert</h5>
            <p class="designation">Surgeon</p>
            <p class="divider"><i class="fa fa-plus-square"></i></p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book.
            </p>
          </div>
          <a href="doctor-profile.html" class="btn btn-transparent inverse text-uppercase">Book An Appointment</a>
        </div>
      </div> */}
      {/* <!-- Doctor Bio #4 Ends --> */}
          
    {/* </div>  */}
    {/* <!-- End of row --> */}
  {/* </div> */}
  {/* <!-- Nested Container Ends --> */}
{/* </section> */}
{/*  */}
      {/* updated */}

      <div class="fw">
            <div class="table">
            <h1  className="text-4xl margin-center">Service Charge</h1>
               <table>
                <tr>
                    <th>Service Names</th>
                    <th>Stage</th>
                    <th>$ Price</th>
                </tr>
                <tr>
                    <td>Teeth Whitening Service at home</td>
                    <td>1 times</td>
                    <td>$115.00</td>
                </tr>
                <tr>
                    <td>Teeth Whitening Service at Dental Clinic</td>
                    <td>1 times</td>
                    <td>$150.00</td>
                </tr>
                <tr>
                    <td>Ceramic crowns and fillings Dental porcelain</td>
                    <td>1 times</td>
                    <td>$515.00</td>
                </tr>
                <tr>
                    <td>Remove crowns, bridges Service</td>
                    <td>1 times</td>
                    <td>$1015.00</td>
                </tr>
                <tr>
                    <td>Covering the recession of the gums</td>
                    <td>1 times</td>
                    <td>$1105.00</td>
                </tr>
                <tr>
                    <td>Consultation, impressions and preparation of models</td>
                    <td>1 times</td>
                    <td>$3115.00</td>
                </tr>
                <tr>
                    <td>Removal of an old inlay, old crown</td>
                    <td>1 times</td>
                    <td>$8115.00</td>
                </tr>
                <tr>
                    <td>Overlay teeth whitening ( 2 arches)</td>
                    <td>1 times</td>
                    <td>$1215.00</td>
                </tr>
                <tr>
                    <td>Standard porcelain and zirconium crown on implant</td>
                    <td>1 times</td>
                    <td>$115.10</td>
                </tr>
                <tr>
                    <td>Implantation of an implant (price depends on system used)</td>
                    <td>1 times</td>
                    <td>$50</td>
                </tr>
               </table>
               <button>Read More <i class="far fa-arrow-alt-circle-right"></i> </button>
            </div>
        </div>
{/* <!-- ............................................Apointment Part............................................ --> */}
        <div class="apointment">
            <div class="fw">
                <div class="full-input">
                    <h1>Book An Apointment</h1>

                    <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" type="text" name="" id="input"/>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Your Phone" type="number" name="" id="input"/>
                    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your E-mail" type="mail" name="" id="input"/>
                    <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Your Address" type="text" name="" id="input"/>
                    <select value={gender} onChange={e => setGender(e.target.value)} name="#" id="input-1">
                    <option value="">Are you?</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                    <select value={doctor} onChange={e=>setDoctor(e.target.value)} name="#" id="input-1">
                        <option value="">Choice Doctor</option>
                        <option value="Dr. Md Toyhedul Islam Achem">Dr. Md Toyhedul Islam Achem</option>
                        <option value="Dr. Md Nayon Sorker">Dr. Md Nayon Sorker</option>
                        <option value="Dr. Hridoy Chandra">Dr. Hridoy Chandra</option>
                        <option value="Dr. Md Amzad Hossen">Dr. Md Amzad Hossen</option>
                    </select>
                    <select value={time} onChange={e=>setTime(e.target.value)} name="#" id="input-1">
                        <option value="">Choice Time </option>
                        <option value="9.00am to 10.00 am">9.00am to 10.00 am</option>
                        <option value="10.00am to 11.00am">10.00am to 11.00am</option>
                        <option value="11.00am to 12.00pm">11.00am to 12.00pm</option>
                        <option value="12.00pm to 1.00pm">12.00pm to 1.00pm</option>
                        <option value="1.00pm to 2.00pm">1.00pm to 2.00pm</option>
                        <option value="2.00pm to 3.00pm">2.00pm to 3.00pm</option>
                        <option value="3.00pm to 4.00pm">3.00pm to 4.00pm</option>
                    </select>
                    {/* <select name="#" id="input-1">
                        <option value="select">Choice Time </option>
                        <option value="select">9.00am to 10.00 am</option>
                        <option value="select">10.00am to 11.00am</option>
                        <option value="select">11.00am to 12.00pm</option>
                        <option value="select">12.00pm to 1.00pm</option>
                        <option value="select">1.00pm to 2.00pm</option>
                        <option value="select">2.00pm to 3.00pm</option>
                        <option value="select">3.00pm to 4.00pm</option>
                    </select>  */}
                    
                    <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your Message............" name="text" id="input-2"></textarea>
                    <button onClick = {handleSubmit} value="submit data">BOOKING NOW</button>
                </div>
            </div>
        </div>

      
      
      
    

    </section>
  );
}

export default Hero;

import React from 'react'
import ShowaboutCard from './ShowaboutCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Testimonials.css';
import { useState,useEffect } from 'react';
import S from './speech.txt'
import '@splidejs/react-splide/css';
export default function Testimonials() {

    const [fileContent,setFileContent]=useState(()=>"");
    useEffect(() => {
        // Fetch the text file
        fetch(S)
          .then(response => response.text())
          .then(data => {
            setFileContent(()=>data);
          })
          .catch(error => {
            console.error('Error fetching file:', error);
          });
      }, []);
    
    return (
        <div className='testimonial_container'id="testimonial_container">
            <fieldset>
                
                    <h1 id="testimonial_heading">The Testimonials</h1>
                

                <p id="testimonial_paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolorum provident aliquid quos! Eveniet recusandae odio ex officiis dolorum. Sapiente, tempore. Pariatur est, maxime animi esse eum a porro et.
                </p>
                <section id="sc_container">
                  
                <ShowaboutCard img_src="https://th.bing.com/th/id/OIP.4d6QB46qptk7Evhv36VUswHaF7?w=191&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"heading="Vice Chancellor" text={fileContent} name="Dr. House"/>

                </section>
                <section id="sc_container">
                <ShowaboutCard img_src="https://th.bing.com/th/id/OIP.q9m2DXyVt2-Tk_39X2fe8AHaG4?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"heading="Director"name="Dr. Hound"text={fileContent}/>
                </section>
                <section id="sc_container">
                <ShowaboutCard img_src="https://th.bing.com/th/id/OIP.xmb76Waeoi8-DkLoJHw7zgHaH5?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"heading="Dean"name="Dr. Frakiestien"text={fileContent}/>
                </section>

                <section id="sc_container">
                <ShowaboutCard img_src="https://th.bing.com/th/id/OIP.xmb76Waeoi8-DkLoJHw7zgHaH5?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"heading="Dean"name="Dr. Frakiestien"text={fileContent}/>
                </section>

                <section id="sc_container">
                <ShowaboutCard img_src="https://th.bing.com/th/id/OIP.xmb76Waeoi8-DkLoJHw7zgHaH5?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"heading="Dean"name="Dr. Frakiestien"text={fileContent}/>
                </section>
            </fieldset>
        </div>
    )
}

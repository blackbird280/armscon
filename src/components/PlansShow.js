import React from 'react'
import Plans from './Plans'
import './PlanShow.css';
export default function PlansShow() {
    return (
        <div id="plansShow_container" style={{
            background: 'rgb(30,30,30)',
            margin: '0px',
            padding: "15% 0%"
        }}>
            <h1 style={{
                color: 'white',
                background: 'none',
                border: "0px solid white",
                borderRadius: '20px',
                textShadow: '0px 0px 15px red',
                width: '80%',
                margin: 'auto',
                textAlign: 'center',
                padding: '20px',

            }}>Registration Plans</h1>
            <section id="planc_container_j">
            <article id="palnc_card">
                <Plans heading="Basic Registration Plan" price="1000" backgroundColor="" color="rgb(240,240,240)" special_color="rgb(255,128,64)" incentives={[
                    "Icentive 1", "Incentive 2", "Incentive 3", "Incentive 4", "Incentive 5"
                ]} /></article>
            <article id="palnc_card">
                <Plans heading="Diamond Plan" price="1700" backgroundColor="" color="rgb(240,240,240)" special_color="rgb(174,32,114)" incentives={[
                    "Icentive 1", "Incentive 2", "Incentive 3", "Incentive 4", "Incentive 5"
                ]} /></article>
            <article id="palnc_card">
                <Plans heading="Gold Plan" price="1200" backgroundColor="" color="rgb(240,240,240)" special_color="rgb(225,232,24)" incentives={[
                    "Icentive 1", "Incentive 2", "Incentive 3", "Incentive 4", "Incentive 5"
                ]} />
            </article><article id="palnc_card">
                <Plans heading="Silver Plan" price="1000" backgroundColor="" color="rgb(240,240,240)" special_color="rgb(250,250,250)" incentives={[
                    "Icentive 1", "Incentive 2", "Incentive 3", "Incentive 4", "Incentive 5"
                ]} /></article>

                </section>


        </div>
    )
}

import { Button } from "../button"
import { Heading } from "../heading"
import Ibm from "../../assets/images/brands/ibm.png"
import TestimonialPerson from "../../assets/images/testimonials/testimonials.png";

export const Testimonials = () => {
    return(
        <section className="bg-white ">
            <Heading type="h2" className="w-full md:max-w-[950px] max-w-[360px] mx-auto flex flex-colitems-center justify-center gap-[80px] md:px-5 xl:px-0">Testimonials</Heading>

            <div className="flex flex-col py-4 items-center justify-center gap-11 md:gap-12">
                <img src={Ibm} alt="" />

                <p className="text-center text-sm text-secondary-text font-bold w-full max-w-[280px] md:max-w-none md:text-2xl md:font-normal">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule
                </p>

                <div className="flex gap-3 justify-center items-center">
                    <img src={TestimonialPerson} alt="testimonial person"/>

                    <div>
                        <p className="text-xs font-bold text-secondary-text">Organize across</p>
                        <p className="text-sm text-black">UI Designer</p>
                    </div>
                </div>
                <Button className="w-full max-w-[280px]">More Testimonials</Button>
            </div>
        </section>
    )
}
import { Nigeria } from '@/icons'
import React from 'react'

type Props = {}

const Mid = (props: Props) => {
  return (
    <div className="md:pl-32 pl-5 pb-6 flex flex-col md:flex-row border-b-[1px] border-b-[#676767]">
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-[70%] md:gap-4 gap-6 pt-9 pr-1">
          <div>
            <img src="/images/sincwhite.png" alt="Sinc Logo" className="mb-4" />
            <p>
              SINC Partners is a service incubation company connecting experts
              in product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity
              (usually 0.5% to 2%)
            </p>
          </div>
          <div>
            <p className="md:text-[18px] font-medium mb-4">Platforms</p>
            <ul className="space-y-1 text-[14px] md:text-[18px]">
              <li>Kofoundme</li>
              <li>InResidency</li>
              <li>Service Market</li>
              <li>Founders</li>
              <li>Metty</li>
              <li>Grantty</li>
              <li>Boldtell</li>
              <li>Chekwa</li>
            </ul>
          </div>
          <div>
            <p className="md:text-[18px] font-medium mb-4">Initiatives</p>
            <ul className="space-y-1 text-[14px] md:text-[18px]">
              <li>Jabi Plains</li>
              <li>Local Pricing Initiative</li>
              <li>Scholarship Program</li>
              <li>SSMN Pricing</li>
              <li>University STEM </li>
              <li>University InResidency </li>
              <li>
                1M Nigeria <Nigeria /> Products
              </li>
              <li>Founders Festival </li>
            </ul>
          </div>
          <div>
            <p className="md:text-[18px] font-medium mb-4">About Us</p>
            <ul className="space-y-1 text-[14px] md:text-[18px]">
              <li>Who We Are</li>
              <li>Our People</li>
              <li>Concept Innovations</li>
              <li>Our Process</li>
              <li>Investors Network</li>
              <li>CSR & Events</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="md:text-[18px] font-medium mb-4">More</p>
            <ul className="space-y-1 text-[14px] md:text-[18px]">
              <li>Services</li>
              <li>Equity Jobs</li>
              <li>EIR Program</li>
              <li>Offers</li>
              <li>FAQ</li>
              <li>Grantty</li>
              <li>Blog & Resources</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="pt-9 pl-4 md:border-l-[1px] border-l-[#676767] w-[30%]">
          <p className="md:text-[18px] font-medium mb-4">Locations</p>
          <div className="font-medium mb-4 text-[14px] md:text-[16px] space-y-2">
            <p>Abuja, Nigeria</p>
            <p>Lagos, Nigeria </p>
            <p>Philadelphia, USA</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-2">
            <div>
              <img
                src="/images/accredited.png"
                alt="accredited"
                className="mb-2"
              />
              <p>Trusted Business</p>
            </div>
            <div>
              <img src="/images/whatsapp.png" alt="whatsapp" className="mb-2" />
              <p>Chat with US</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Mid
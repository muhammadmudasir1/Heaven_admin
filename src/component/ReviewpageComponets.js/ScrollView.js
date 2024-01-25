import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

const ReviewList = [
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
  {
    url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione <br /> repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos."
  },
]

const ScrollView = () => {

  return (
    <div className='lg:grid lg:grid-cols-7 mt-14'>
      <div className='p-8 col-span-5'>
        {ReviewList.map(ReviewList => {
          return <NavLink to={"../OneReview"} className='flex items-center py-8 my-8 shadow-for-app bg-white/95 rounded-lg 'style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }}>
            <div className='h-full lg:w-64'>
              <img src={ReviewList.url} alt="" className='bg-cover ' />
            </div>
            <div className='lg:pl-8 pr-3 w-2/4 '>
              <h1 className='text-neutral-800 text-xl font-semibold font-[Roboto]'>Two Trees SK-1</h1>
              <div className='flex'>
                {[...Array(5)].map((_, index) => (

                  <CiStar key={index} size={40} className='text-amber-500' />

                ))}
              </div>
              <p>{ReviewList.review}</p>
              <div className='flex items-center '>
                <Link to={'../OneReview'} className='underline decoration-cyan-500 underline-offset-8 decoration-4'>Read More</Link>
                <MdKeyboardDoubleArrowRight />
              </div>
            </div>
          </NavLink>
        })}
      </div>
      <div className='lg:bg-white lg:h-full lg:w-full lg:col-span-2 lg:shadow-lg lg:shadow-slate-600' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }}/>
    </div>
  );
};

export default ScrollView;

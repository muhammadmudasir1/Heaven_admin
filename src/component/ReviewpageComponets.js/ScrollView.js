import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

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
          return <div className='flex items-center py-8 my-4 shadow-lg shadow-black/30 bg-white/95 rounded-lg '>
            <div className='h-64 lg:w-64'>
              <img src={ReviewList.url} alt="" className='h-full w-full ' />
            </div>
            <div className='lg:pl-8 pr-3 w-2/4 '>
              <h1 className='text-neutral-800 text-xl font-semibold font-[Roboto]'>Two Trees SK-1</h1>
              <div className='flex'>
                {[...Array(5)].map((_, index) => (

                  <CiStar key={index} size={40} className='text-yellow-400' />

                ))}
              </div>
              <p>{ReviewList.review}</p>
              <div className='flex items-center '>
                <Link to={'../OneReview'} className='underline decoration-blue-800 underline-offset-8 decoration-4'>Read More</Link>
                <MdKeyboardDoubleArrowRight />
              </div>
            </div>
          </div>
        })}
      </div>
      <div className='lg:bg-white lg:h-full lg:w-full lg:col-span-2 lg:shadow-lg lg:shadow-slate-600' />
    </div>
  );
};

export default ScrollView;

import React from 'react'

type Props = {
  video:string;
  book:string;
}

const Blog = ({video, book}: Props) => {
  return (
    <div className="w-[378px]">
            <img src={video} alt="video" />
            <div className="mt-6 flex gap-3">
              <div className="text-[13px]">
                <p className="font-semibold mb-1">Top Ten Most Powerful Startup</p>
                <p>
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <img src={book} className="w-[82px]" alt="book" />
            </div>
          </div>
  )
}

export default Blog
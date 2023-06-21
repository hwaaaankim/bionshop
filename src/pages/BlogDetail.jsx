import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import BaseInput from '../components/controlled/BaseInput'
import BaseTextArea from '../components/controlled/BaseTextArea'

function FeedbackForm() {
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className="space-y-2">
      <div>Leave your comment</div>

      <div className="grid grid-cols-1 mdp5:grid-cols-2">
        <div>
          <BaseInput
            label="Your Name:"
            sm={false}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-600">Your name is required</span>
          )}
        </div>
      </div>
      <div className="space-y-1">
        <BaseTextArea
          label="Your Comment:"
          sm={false}
          {...register('comment', { required: true })}
        />
        <div className="text-xs">Note: HTML is not translated!</div>
        {errors.comment && (
          <span className="text-xs text-red-600">Comment is required</span>
        )}
      </div>
      <div className="grid grid-cols-1 mdp5:grid-cols-3">
        <div>
          <BaseInput
            label="Enter the code the box below:"
            sm={false}
            {...register('code', { required: true })}
          />
          {errors.code && (
            <span className="text-xs text-red-600">
              You need to put the code in the box below
            </span>
          )}
        </div>
      </div>
      <img
        src="image/demo/content/captcha.jpg"
        style={{ width: 150, height: 35 }}
      />
      <div className="flex pt-8">
        <div
          className="bg-[#555] text-white py-2 text-center rounded text-sm"
          style={{ width: 150 }}
        >
          Submit
        </div>
      </div>
    </div>
  )
}

export default function BlogDetail() {
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Blog', path: '/blog' },
          {
            title: 'Duis autem vel eum irure sed diam nonumy',
            path: '/blog-detail',
          },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  const article = {
    id: 1,
    picture: 'image/catalog/blog/4.jpg',
    title: 'Duis autem vel eum irure sed diam nonumy',
    author: 'Wash upito',
    publishedAt: {
      day: '04',
      month: 'Dec',
    },
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore...',
    comments: [],
  }
  return (
    <div className="px-[2.5%] md:flex md:space-x-8 space-y-8 md:space-y-0">
      <div className="md:w-[237px] md:flex-shrink-0">
        <div className="border rounded">
          <div className="uppercase font-bold p-[15px] bg-[#f5f5f5] border-b">
            blog category
          </div>
          <div className="py-[15px] px-[20px]">
            {[
              'our blog',
              'demo category 1',
              'demo category 2',
              'demo category 3',
              'demo category 4',
              'demo category 5',
            ].map((category, index) => (
              <div
                key={index}
                className="capitalize text-xs py-[10px] px-[15px] cursor-pointer hover:text-primary"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:flex-auto space-y-6">
        <div className="uppercase text-gray-900 font-semibold">
          {article.title}
        </div>
        <div className="flex space-x-2 items-center text-sm text-gray-500">
          <div>Post by: {article.author}</div>
          <div>
            Created Date: {article.publishedAt.month} {article.publishedAt.day}
          </div>
          <div>{article.comments.length} Comments</div>
        </div>
        <div className="">
          <img src={article.picture} />
        </div>

        <div className="text-xs space-y-2">
          <p>
            Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec
            ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim.
            Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean
            molestie justo sed aliquam euismod. Maecenas laoreet bibendum
            laoreet. Morbi tempor massa sit amet purus lobortis, non porta
            tellus dignissim.
          </p>
          <p>
            Proin dictum justo a nisl pellentesque egestas.Nulla commodo euismod
            nisi ac bibendum. Mauris in pellentesque tellus, in cursus magna.
            Sed volutpat dui bibendum mi molestie, at volutpat nunc dictum.
            Fusce sagittis massa id eros scelerisque, eget accumsan magna
            lacinia. Nullam posuere neque at neque dictum interdum
          </p>
          <p>
            Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a
            feugiat lectus gravida non. Aenean molestie justo sed aliquam
            euismod. Maecenas laoreet bibendum laoreet. Morbi tempor massa sit
            amet purus lobortis, non porta tellus dignissim. Proin dictum justo
            a nisl pellentesque egestas.Nulla commodo euismod nisi ac bibendum.
            Mauris in pellentesque tellus, in cursus magna. Sed volutpat dui
            bibendum mi molestie, at volutpat nunc dictum. Fusce sagittis massa
            id eros scelerisque, eget accumsan magna lacinia. Nullam posuere
            neque at neque dictum interdum
          </p>
        </div>
        <hr />
        <FeedbackForm />
      </div>
    </div>
  )
}

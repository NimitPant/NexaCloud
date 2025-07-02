import { redirect } from 'next/navigation'
import Image from 'next/image'

import Header from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import { getImageById } from '@/lib/actions/image.actions'
import { getCurrentUser } from '@/lib/actions/user.actions'
import Link from 'next/link'
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation"
import TransformedImage from "@/components/shared/TransformedImage"
import PageHeader from "@/components/shared/PageHeader"

const TransformationDetailsPage = async ({ params: { id } }: SearchParamProps) => {
  const user = await getCurrentUser();
  if (!user) redirect('/sign-in');
  
  const image = await getImageById(id);

  return (
    <>
      <Header title={image.title} />

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-dark-600">Transformation:</p>
          <p className=" capitalize text-purple-400">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Prompt:</p>
              <p className=" capitalize text-purple-400">{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          {/* Media Uploader */}
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original</h3>

            <Image 
              width={image.width}
              height={image.height}
              src={image.secureURL}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          {/* Transformed Image */}
          {/* <TransformedImage 
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            hasDownload={true}
          /> */}
        </div>

        {user._id.toString() === image.author._id.toString() && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            {/* <DeleteConfirmation imageId={image._id} /> */}
          </div>
        )}
      </section>
    </>
  )
}

export default TransformationDetailsPage
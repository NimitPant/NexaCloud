import { redirect } from 'next/navigation';

import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getImageById } from '@/lib/actions/image.actions'
import { getCurrentUser } from '@/lib/actions/user.actions';

const UpdateTransformationPage = async ({ params: { id } }: SearchParamProps) => {
  const user = await getCurrentUser();
  if (!user) redirect('/sign-in');
  
  const image = await getImageById(id);
  const transformation = transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className="mt-10">
        <TransformationForm 
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  )
}

export default UpdateTransformationPage
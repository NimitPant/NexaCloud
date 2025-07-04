import PageHeader from '@/components/shared/PageHeader'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById, getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const user = await getCurrentUser();

  if(!user) redirect('/sign-in')

  return (
    <>
      <PageHeader 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage
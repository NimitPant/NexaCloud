import { redirect } from "next/navigation";

import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Collection } from "@/components/shared/Collection";
import { getUserImages } from "@/lib/actions/image.actions";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/shared/SignOutButton";

export const dynamic = 'force-dynamic'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <PageHeader title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/images/photo.svg"
              alt="photo"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>

      <section className="mt-8 flex justify-start">
        <SignOutButton />
      </section>
    </>
  );
};

export default ProfilePage;
import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import React from "react";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper">
          <h3 className="h3-bold text-center sm:text-left">Update Event</h3>
        </div>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" event={event} eventId={id} />
      </div>
    </>
  );
};

export default UpdateEvent;

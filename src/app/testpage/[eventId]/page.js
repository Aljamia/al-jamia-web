function HomePage(eventId) {
  // const router = useRouter();
  // const { eventId } = router.query;
  console.log({ eventId });

  return (
    <div>
      <h1>Welcome to the inner page {eventId.params.eventId}</h1>
    </div>
  );
}

export default HomePage;

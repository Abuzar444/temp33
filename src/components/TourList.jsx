import Tour from "./Tour";

function TourList({ tours, handleDelete }) {
  // const renderedTours = tours.map((tour) => (
  //   <Tour
  //     {...tour}
  //     key={tour.id}
  //     handleDelete={handleDelete}
  //   />
  // ));

  return (
    <div className="mt-12 tours-list">
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} handleDelete={handleDelete} />
      })}
    </div>
  );
}

export default TourList
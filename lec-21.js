class BookTicket {
    create() {
      console.log("Fill form");
    }
  
    reservation(source, target, date, reservation, reservationType) {
      console.log(source, target, date, reservation, reservationType);
    }
  
    search() {
      console.log("search for train");
    }
    submit() {
      console.log("Reservation successful");
    }
  }
  
  let ticket = new BookTicket();
  ticket.create();
  ticket.reservation("surat", "boriwali", "24", "1Ac", "Ladies");
  ticket.search();
  ticket.submit();
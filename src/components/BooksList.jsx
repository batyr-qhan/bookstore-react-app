import React from "react";
import BookItem from "./BookItem";

import data from "../data/data";

export default function BooksList() {
  return (
    <div>
      {data.map((book, index) => (
        <BookItem book={book} key={index} index={index} />
      ))}
    </div>
  );
}

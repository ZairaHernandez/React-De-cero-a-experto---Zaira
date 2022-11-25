import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log(" Me volví a generar :(, prueba ");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(3);
      }}
      >
          
      Incrementar
    </button>
  );
});

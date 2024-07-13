/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

export default function MenuImagen() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div className="relative" style={{ height: "500px" }}>
      <span className="inline-block rounded-full relative bg-gray-800 w-8 h-8 align-middle">
        <img
          className="w-full h-full inline-block rounded-full align-bottom"
          alt=""
          src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1380834%2F4bfff70a-0fd0-40bb-9ae4-707095144b98.png"
          onClick={toggleSubMenu}
        />
      </span>
      {isSubMenuVisible && (
        <div
          className="rounded-lg bg-red shadow-lg absolute top-10 left-0 w-48"
          style={{
            zIndex: 1000,
            width: "200px",
            padding: "10px",
          }}
        >
          <p className='text-red-500'>Opción 1</p>
          <p>Opción 2</p>
          <p>Opción 3</p>
        </div>
      )}
    </div>
  );
}
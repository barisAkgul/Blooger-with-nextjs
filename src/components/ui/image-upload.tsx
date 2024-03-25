"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

import Image from "next/image";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full border border-dashed border-gray-200 h-96 rounded-lg flex flex-col justify-center items-center">
      {value?.length > 0 && (
        <Image fill className="object-contain" alt="Image" src={value[0]} />
      )}
      {value && (
        <>
          <img
            src="/assets/ImageLogo.png"
            alt="Image logo"
            className="w-32 h-32"
          />
          <span className="mt-6 text-sm text-gray-300">
            Upload photo of your design here
          </span>
        </>
      )}
      <CldUploadWidget onUpload={onUpload} uploadPreset="blog_project">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <input
              className="opacity-0 w-full h-full absolute"
              id="designPic"
              onClick={onClick}
            />
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;

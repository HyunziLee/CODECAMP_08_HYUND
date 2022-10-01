import { RadioChangeEvent } from "antd";
import { ChangeEvent } from "react";

export interface IRatioProps {
  InputFunction: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    title: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}

export interface IRatioUIProps {
  InputFunction: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    title: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onChange: (e: RadioChangeEvent) => void;
  fileUrls: string[];
  value: number;
}

import React from "react";
import {
  AlignCenterIcon,
  AtSignIcon,
  BarChart4Icon,
  BellIcon,
  BluetoothIcon,
  BoldIcon,
  BoxIcon,
  BriefcaseIcon,
  CheckIcon,
  CodeIcon,
  HandIcon,
  InboxIcon,
  Layers3Icon,
  LinkIcon,
  ListIcon,
  LockIcon,
  MailIcon,
  MessageCircleIcon,
  MoonIcon,
  PhoneIcon,
  ScreenShareIcon,
  SearchIcon,
  SmileIcon,
  SparkleIcon,
  StretchVerticalIcon,
  SunIcon,
  ThumbsUpIcon,
  UserRoundIcon,
  Volume2Icon,
  ZapIcon,
} from "lucide-react";

const icons = [
  CodeIcon,
  BellIcon,
  InboxIcon,
  MailIcon,
  AtSignIcon,
  LinkIcon,
  AlignCenterIcon,
  BoldIcon,
  UserRoundIcon,
  BarChart4Icon,
  BluetoothIcon,
  ZapIcon,
  Volume2Icon,
  SunIcon,
  MoonIcon,
  SparkleIcon,
  SmileIcon,
  ScreenShareIcon,
  PhoneIcon,
  HandIcon,
  Layers3Icon,
  InboxIcon,
  ListIcon,
  LockIcon,
  MessageCircleIcon,
  SearchIcon,
  StretchVerticalIcon,
  ThumbsUpIcon,
  AtSignIcon,
  BoxIcon,
  BriefcaseIcon,
  CheckIcon,
];

export const IconExamples = ({ limit }: { limit?: number }) => {
  return (
    <>
      {icons.slice(0, limit ?? icons.length).map((Icon, i) => (
        <div
          key={i}
          className="flex h-16 items-center justify-center rounded-md bg-bg-muted shadow"
        >
          <Icon size={20} />
        </div>
      ))}
    </>
  );
};

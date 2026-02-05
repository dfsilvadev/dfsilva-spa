import { SOCIAL_URLS } from "@/lib/constants/social";
import { LinkSimple } from "phosphor-react";
import Flex from "../flex";
import Heading from "../heading";
import SplitText from "../split-text";

const links = [
  { label: "ig", url: SOCIAL_URLS.INSTAGRAM, title: "Instagram" },
  { label: "lk", url: SOCIAL_URLS.LINKEDIN, title: "LinkedIn" },
  { label: "gh", url: SOCIAL_URLS.GITHUB, title: "Github" },
  { label: "tw", url: SOCIAL_URLS.TWITTER, title: "Twitter" },
] as const;

function SocialLinkLabel({ label }: { label: string }) {
  return (
    <SplitText
      firstSplit={
        <Heading as="span" size="small" textColor="gray" weight="semibold">
          {label}
        </Heading>
      }
      lastSplit={
        <Heading as="span" size="small" textColor="gray" weight="semibold">
          {label}
        </Heading>
      }
    />
  );
}

export default function SocialMedia() {
  return (
    <Flex align="center" gap="1.6rem">
      <Flex align="center" gap="0.8rem">
        <LinkSimple size={20} weight="regular" aria-hidden />
        <Heading
          as="span"
          size="small"
          textColor="gray"
          weight="semibold"
          className="lessThan"
        >
          siga-me:
        </Heading>
        <Heading
          as="span"
          size="small"
          textColor="gray"
          weight="semibold"
          className="greaterThan"
        >
          siga-me nas redes sociais:
        </Heading>
      </Flex>

      {links.map(({ label, url, title }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          <SocialLinkLabel label={label} />
        </a>
      ))}
    </Flex>
  );
}

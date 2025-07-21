import PopularServices from "@/components/common/PopularServices";
import RecentRequests from "@/components/common/RecentRequests";
import SearchMenu from "@/components/common/SearchMenu";
import Welcome from "@/components/common/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <SearchMenu />
      <RecentRequests />
      <PopularServices />
    </>
  );
}

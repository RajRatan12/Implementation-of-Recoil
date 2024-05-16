// import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState} from "recoil";
// import {
//   netWorkAtom,
//   jobsAtom,
//   notificationAtom,
//   messagingAtom,
// } from "./atoms";

// function App() {
//   return (
//     <RecoilRoot>
//       <MainAPP />
//     </RecoilRoot>
//   );
// }

// function MainAPP() {
//   const networkNotificationCount = useRecoilValue(netWorkAtom);
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   const notificationAtomCount = useRecoilValue(notificationAtom);
//   const messagingAtomCount = useRecoilValue(messagingAtom);
//   //const [messagingAtomCount, setmessagingAtomCount] = useRecoilState(messagingAtom);

//   return (
//     <div>
//       <button>Home</button>

//       <button>
//         My Network ({" "}
//         {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//       </button>
//       <button>Jobs ({jobsAtomCount})</button>
//       <button>Messaging ({messagingAtomCount })</button>
//       <button>Notifications ({notificationAtomCount})</button>
//       <ButtonUpdater/>
//       {/* <button
//         onClick={() => {
//           setmessagingAtomCount(messagingAtomCount + 1);
//         }}
//       >
//         Me
//       </button> */}
//     </div>
//   );
// }

// function ButtonUpdater(){
//  const setmessagingAtomCount = useSetRecoilState(messagingAtom);
//   return <button
//   onClick={() => {
//     setmessagingAtomCount(c => c+1);
//   }}
// >
//   Me
// </button>
// }

// export default App;







// use of selectors

import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

import {
  netWorkAtom,
  jobsAtom,
  notificationAtom,
  messagingAtom,
  totalNotificationSelector,
} from "./atoms";

import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainAPP />
    </RecoilRoot>
  );
}

function MainAPP() {
  const networkNotificationCount = useRecoilValue(netWorkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  //const [messagingAtomCount, setmessagingAtomCount] = useRecoilState(messagingAtom);

  // const totalNotificationCount = useMemo (() => {
  //   return networkNotificationCount + notificationAtomCount + messagingAtomCount + jobsAtomCount;
  // }, [networkNotificationCount, notificationAtomCount, messagingAtomCount, jobsAtomCount])

 const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>
        My Network ({" "}
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      <button>Me {totalNotificationCount} </button>
    </div>
  );
}

export default App;

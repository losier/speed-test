import React, { useEffect, useState } from "react";

import { AiOutlineApi } from "react-icons/ai";
import { BsDownload, BsUpload } from "react-icons/bs";

import NetworkSpeed from "network-speed";
const testNetworkSpeed = new NetworkSpeed();

/**
 * @func GetSpeed
 * @description 'example func'
 */
const GetSpeed = () => {
  
  const [ping, setPing] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);

  useEffect(() => {
    /**
     * @func getNetworkDownloadSpeed
     * @description 'example func'
     */

    async function getNetworkDownloadSpeed() {
      const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
      const fileSizeInBytes = 500000;
      const speed = await testNetworkSpeed.checkDownloadSpeed(
        baseUrl,
        fileSizeInBytes
      );
      // console.log(speed);
      setDownloadSpeed(speed.mbps);
    }

    /**
     * @func getPing
     * @description 'example func'
     */

    async function getPing() {
      var startTime = Date.now();
      await fetch("https://eu.httpbin.org/stream-bytes/500000");
      var endTime = Date.now();

      var timeDiff = endTime - startTime;
      // console.log(timeDiff);
      setPing(timeDiff);
    }

    /**
     * @func interval
     * @description 'example func'
     * @param ( 'params0'
     */
    const interval = setInterval(() => {
      getNetworkDownloadSpeed();
      getPing();
      setUploadSpeed(69);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /**
   * @func render
   * @description 'example func'
   * @param ( 'params0'
   */
  return (
    <>
      <div className='flex flex-col items-center justify-center w-4/5 h-full'>
        <h1>Your Internet speed is:</h1>
        <div className='justify-center'>
          <div className='grid gap-6 grid-cols-3 '>
            {/*can't find styling for ping to refer to on previous style sheet*/}
            <article className={`${'bg-transparent p-10 text-center rounded-sm border-solid border-blue-600'}`}>
              <AiOutlineApi className='text-blue-600 text-4xl mb-4' />
              <h5 className="text-base uppercase">Ping</h5>
              <small className="text-3xl text-gray-200">
                <span className='text-base text-gray-50'>{ping} </span>
                ms
              </small>
            </article>
            {/*can't find styling for download to refer to on previous style sheet*/}
            <article className={`${'bg-transparent  p-10 text-center rounded-sm border-solid border-blue-600'}`}>
              <BsDownload className='text-blue-600 text-4xl mb-4'/>
              <h5 className="text-base uppercase">Download</h5>
              <small className="text-3xl text-gray-200">
                <span className='text-base text-gray-50'>{downloadSpeed} </span>
                mbps
              </small>
            </article>
            
            {/*can't find styling for upload to refer to on previous style sheet*/}
            <article className={`${'bg-transparent  p-10 text-center rounded-sm border-solid border-blue-600'}`}>
              <BsUpload className='text-blue-600 text-4xl mb-4'/>
              <h5 className="text-sm uppercase">Upload</h5>
              <small className="text-3xl text-gray-200">
                <span className='text-base text-gray-50'>{uploadSpeed} </span>
                mbps
              </small>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSpeed;

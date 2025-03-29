import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const EmotionDetector = () => {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState('Detecting...');
  const [modelsLoaded, setModelsLoaded] = useState(false);

  // load models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (
        modelsLoaded &&
        webcamRef.current &&
        webcamRef.current.video &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const detection = await faceapi
          .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detection && detection.expressions) {
          const sorted = Object.entries(detection.expressions).sort((a, b) => b[1] - a[1]);
          setEmotion(sorted[0][0]);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [modelsLoaded]);

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Emotion Detector</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        className="rounded shadow-md"
      />
      <p className="mt-4 text-lg font-semibold text-purple-700">
        Detected Emotion: {emotion}
      </p>
    </div>
  );
};

export default EmotionDetector;
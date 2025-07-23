import Script from "next/script";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white gap-5 space-y-8 p-8 rounded-lg shadow-lg  w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">武田珠里</h1>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b border-red-600">
            自己紹介
          </h2>
          <p className="text-gray-600 mt-2">
            私は、ウェブ開発に情熱を注いでいるエンジニアです。最新の技術を使って、ユーザーに優しいインターフェースと効率的なシステムを作成しています。日々、新しい技術やフレームワークを学び、成長しています。
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b border-red-600">
            スキル
          </h2>
          <div className="grid grid-flow-col gap-2">
            <div className="mt-4 ">
              <h3 className=" font-semibold text-gray-700">
                プログラミング言語
              </h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Ruby</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold text-gray-700">フレームワーク</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Next.js</li>
                <li>React Native </li>
                <li>Hono.js</li>
                <li>Express.js</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold text-gray-700">データベース</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>PostgreSQL</li>
                <li>Supabase</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold text-gray-700">
                インフラ / デプロイ
              </h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>AWS</li>
                <li>Docker</li>
                <li>Vercel</li>
                <li>Render</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold text-gray-700">
                その他(ライブラリ)
              </h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Redux</li>
                <li>Jotai</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold text-gray-700">バージョン管理</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b border-red-600">
            資格
          </h2>
          <p className="text-gray-600 mt-4 font-semibold">AWS Certified</p>

          <div className="flex flex-wrap gap-4 mt-2">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="ac846df1-563d-4042-a44c-1e1ea684ce84"
              data-share-badge-host="https://www.credly.com"
            ></div>

            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="6c0e98bb-c1e6-4117-ad97-1392efd2eada"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>

          <Script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
          />

          <ul className="list-disc pl-6">
            <li className="text-gray-600 mt-2">ITパスポート</li>
            <li className="text-gray-600 mt-2">TOEIC R＆L (530点)</li>
          </ul>
        </div>{" "}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b border-red-600">
            趣味
          </h2>
          <p className="text-gray-600 mt-2">
            プログラミング, 散歩, 読書, 麻雀,
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b border-red-600">
            連絡先
          </h2>
          <p className="text-gray-600 mt-2">
            メールアドレス:{" "}
            <a href="mailto:example@example.com" className="text-blue-500">
              example@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

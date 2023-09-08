<template>
  <div class="fondo">
    <nav class="navbar is-flex is-black">
      <div class="navbar-brand is-justify-content-space-between">
        <a class="navbar-item navbar-start">
          <img
            src="/assets/cryavionet.2.ico"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </div>
      <div class="navbar-brand is-flex ml-auto mr-auto">
        <a class="navbar-item" href="https://www.facebook.com/CryAvionet/">
          <img
            src="/assets/facebook.ico"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <a
          class="navbar-item"
          href="https://www.instagram.com/cry_avionet_rock_band_music/"
        >
          <img src="/assets/instagram.ico" width="30" height="30" alt=""/>
        </a>
        <a class="navbar-item" href="https://www.tiktok.com/@cryavionet">
          <img
            src="/assets/tiktok.ico"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <a class="navbar-item" href="https://twitter.com/CryAvionet">
          <img src="/assets/twitter.2.ico" width="30" height="30" alt="" />
        </a>
      </div>
      <div class="navbar-brand is-pulled-right">
        <a class="navbar-item">
          <img
            src="/assets/cryavionet.2.ico"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </div>
    </nav>
    <!--Container Main end-->
    <div id="wrapper" class="active">
      <div class="container">
        <div class="abs-center">
          <ul>
            <li>
              <div id="tarjeta" class="card">
                <div class="card-content">
                  <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/c5rvpCA0zfQ?si=xTg_DY16qrvH3lPg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://music.apple.com/es/artist/cry-avionet/1599384180')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-300x96">
                        <img
                          id="img1"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_applemusic_onlight.svg"
                          alt="Apple Music"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://open.spotify.com/intl-es/artist/5ntQ8lJFioKBkMTguEkTBo?si=_UgbpKSKRfy88J8rQrVXVA')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img2"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_spotify_onlight.svg"
                          alt="Spotify"
                          longdesc="https://open.spotify.com/artist/5ntQ8lJFioKBkMTguEkTBo?si=PYZKu8PmTxe4vsVhINz3kA"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >PLay</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://www.youtube.com/channel/UCbhWQqWr4OUKg8n0Bk-BI3A?sub_confirmation=1')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img3"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_youtube_onlight.svg"
                          alt="YouTube"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Listen Now"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Listen Now</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://deezer.page.link/gBhSUzLg8cNBs8v48')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img4"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_deezer_onlight.svg"
                          alt="Deezer"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://music.youtube.com/playlist?list=OLAK5uy_nsXothrKScIE7d_4KtsPGO3r3ykuUQa2I&feature=share')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-300x96">
                        <img
                          id="img5"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_youtubemusic_onlight.svg"
                          alt="YouTube Music"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://tidal.com/browse/album/252314861')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img6"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_tidal_onlight.svg"
                          alt="Tidal"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://music.amazon.com/albums/B0BHCF6JQP?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CO&ref=dm_sh_tF0UEk2Zx78ZPWOxgY0WJ89FL')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img7"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_amazonmusic_onlight.svg"
                          alt="Amazon Music (Streaming)"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://music.apple.com/co/album/cry-avionet-full-album-demo-demo/1648414707')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img8"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_itunes_onlight.svg"
                          alt="iTunes"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Descarga"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Descarga</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-content" v-on:click="redirect('https://www.amazon.com/dp/B0BHCF6JQP/ref=dm_rwp_pur_lnd_albm_unrg')">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-one-fifth">
                        <img
                          id="img9"
                          class="music-service-list__img"
                          data-test="music-service-item-image"
                          src="/assets/logo_amazonmusic_onlight.svg"
                          alt="Amazon Music (Streaming)"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button
                        class="button is-black is-pulled-right mt-5"
                        data-test="music-service-item-button"
                        tabindex="-1"
                        title="Play"
                      >
                        <span
                          class="btn-label"
                          data-test="music-service-item-button-label"
                          >Play</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cry",
  methods: {
    redirect: function (link) {
      window.location.href = link;
    },
  },
};
</script>

<style>
.fondo {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)),
    url("/assets/videoimg.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.fondo::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
}
</style>
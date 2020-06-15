<template>
  <div class="vue">
    <div class="header">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="explain">
        <h2>
          <p>Vue</p>
          <span>npm i vue</span>
        </h2>
        <b>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.</b>
      </div>
    </div>
    <div class="info">
      <div class="info-title">
        <h2>Quick Insights</h2>
      </div>
      <div class="info-list">
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Versions</p>
          </div>
          <div class="dLIPjF">
            <div class="jakOsZ">
              <div class="bXEcVy">
                <span class="dcFELj">2.6.11</span>
                <span class="ewstdt">latest</span>
                <span class="bgMQOP">6mo</span>
              </div>
              <div class="eaCLSF">
                <span class="dcFELj">3.0.0-beta.15</span>
                <span class="ewstdt">next</span>
                <span class="bgMQOP">1d</span>
              </div>
              <div class="eaCLSF">
                <span class="dcFELj">1.0.28-csp</span>
                <span class="ewstdt">csp</span>
                <span class="bgMQOP">4yr</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Weekly Downloads</p>
          </div>
          <div class="jklmHY">
            <div class="bWptLg">2M</div>
          </div>
        </div>
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Stars</p>
          </div>
          <div class="jklmHY">
            <div class="bWptLg">166K</div>
          </div>
        </div>
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">License</p>
          </div>
          <div class="jklmHY">
            <div class="bWptLg">MIT</div>
          </div>
        </div>
        <!-- issues -->
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Issues</p>
          </div>
          <div class="sc-qZtVr dLIPjF">
            <div class="sc-pYcnE kSkqbf">
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">321</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">Open</div>
                </div>
              </div>
              <div class="sc-pcxhi gcHCnP"></div>
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">94%</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">Responded within a week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Pull Request -->
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Pull Request</p>
          </div>
          <div class="sc-qZtVr dLIPjF">
            <div class="sc-pYcnE kSkqbf">
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">1815</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">Open</div>
                </div>
              </div>
              <div class="sc-pcxhi gcHCnP"></div>
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">47%</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">Merged within 30d</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Contributors -->
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Contributors</p>
          </div>
          <div class="sc-qZtVr dLIPjF">
            <div class="sc-pYcnE kSkqbf">
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">313</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">Total</div>
                </div>
              </div>
              <div class="sc-pcxhi gcHCnP"></div>
              <div class="sc-oUAoT kVASKi">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">43</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">with 3+ commits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Last commit -->
        <div class="item">
          <div class="jrwOpx">
            <p class="hGXWXR">Last commit</p>
          </div>
          <div class="sc-qZtVr dLIPjF">
            <div class="sc-pYcnE kSkqbf">
              <div class="sc-oUAoT kVASKi-1">
                <div class="sc-qPwwY aevsi">
                  <div class="sc-qXTOB ciDzeO">
                    <div class="sc-pAkoP cqfgNy">10d</div>
                  </div>
                  <div class="sc-pIhhe fPCvPB">ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hello vue",
  props: {
    msg: String
  },
  setup(props) {
    // interface Data {
    //   count: number;
    //   object: object;
    // }
    // return () => h('div', [count.value, object.foo])
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p,
h2 {
  padding: 0;
  margin: 0;
}
.header {
  display: flex;
  z-index: 99;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
  height: 120px;
  background-color: #1d2636;
  background-image: linear-gradient(
    to right,
    rgba(13, 230, 255, 0.15) 0%,
    rgba(201, 189, 174, 0) 25%
  );
  box-shadow: 0px 2px 3px 2px #00000045;
  padding: 12px;
  img {
    width: 100px;
  }
  .explain {
    padding-left: 20px;
  }
  h2 {
    display: flex;
    font-size: 36px;
    align-items: center;
  }
  span {
    width: 100px;
    height: 30px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid;
    border-radius: 16px;
    padding: 5px 15px;
    display: flex;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    &:hover {
      color: #070d17;
      background-color: #11ece5;
    }
  }
}
.info-title {
  //   padding-bottom: 12px;
  h2 {
    color: #92abcf;
    margin-left: 12px;
    font-size: 25px;
    font-weight: 200;
  }
}
.info-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
  .item {
    position: relative;
    flex: 1 0 18%;
    height: 120px;
    min-width: 250px;
    margin: 8px 12px;
    padding: 4px 8px;
    border-radius: 4px;
    background: #1d2636;
    .jrwOpx {
      display: flex;
      align-items: center;
      align-content: center;
      padding: 6px 0 6px 3px;
    }
    .hGXWXR {
      margin: 0 0 0 7px;
      font-size: 15px;
      color: #11ece5;
      line-height: 1em;
    }
    .dLIPjF {
      margin-top: 2px;
    }
    .jakOsZ {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
    }
    .bXEcVy {
      display: inline-flex;
      font-size: 14px;
      padding: 3px 0;
      color: #11ece5;
    }
    .eaCLSF {
      display: inline-flex;
      font-size: 14px;
      padding: 3px 0;
      color: #92abcf;
    }
    .dcFELj {
      margin-left: 2px;
      flex: 5;
      text-overflow: ellipsis;
      max-width: 150px;
      overflow: hidden;
    }
    .ewstdt {
      margin-left: 5px;
      flex: 5;
      text-overflow: ellipsis;
      max-width: 150px;
      overflow: hidden;
    }
    .bgMQOP {
      flex: 2;
      text-align: right;
    }
    // 第二个 item
    .jklmHY {
      display: flex;
      margin-top: 18px;
    }
    .bWptLg {
      font-size: 35px;
      color: #11ece5;
      display: flex;
      align-items: center;
      margin: auto;
    }
    // 第三个 item
    .dLIPjF {
      margin-top: 2px;
    }
    .kSkqbf {
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .kVASKi {
      flex-basis: 50%;
    }
    .kVASKi-1 {
      flex-basis: 100%;
    }
    .aevsi {
      display: flex;

      flex-direction: column;
      margin: auto;

      align-items: center;
    }

    .ciDzeO {
      display: flex;

      flex-direction: row;

      align-items: center;
    }
    .cqfgNy {
      font-size: 35px;
    }
    .fPCvPB {
      font-size: 13px;
      margin: 0px 6px;
      text-align: center;
    }
    .gcHCnP {
      width: 20px;
      border-left: 1px solid #4e6a92;
      margin-top: 5px;
      height: 65px;
    }
    .kVASKi {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
    }
    .fPCvPB {
      font-size: 13px;
      margin: 0px 6px;
      text-align: center;
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

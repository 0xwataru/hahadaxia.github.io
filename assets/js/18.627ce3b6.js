(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{369:function(t,a,e){"use strict";e.r(a);var n=e(1),o=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("安装\n第一步：yum install -y perl-JSON  perl-libwww-perl libyaml-devel perl-LWP-Protocol-https\n第二步：rpm -ivh moloch-1.6.1-1.x86_64.rpm\n第三步：/data/moloch/bin/Configure\n参考：https://raw.githubusercontent.com/aol/moloch/master/release/README.txt")])]),t._v(" "),e("p",[t._v("Password to encrypt S2S and other things [no-default] zzh")]),t._v(" "),e("p",[t._v("Moloch - Configured - Now continue with step 4 in /data/moloch/README.txt\n/sbin/start elasticsearch # for upstart/Centos 6/Ubuntu 14.04\nsystemctl start elasticsearch.service # for systemd/Centos 7/Ubuntu 16.04\n#ln -s /app/jdk/jdk1.8.0_201/bin/java  /usr/local/bin")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Initialize/Upgrade Elasticsearch Moloch configuration\na) If this is the first install, or want to delete all data\n/data/moloch/db/db.pl http://ESHOST:9200 init\nb) If this is an update to moloch package\n/data/moloch/db/db.pl http://ESHOST:9200 upgrade")]),t._v(" "),e("li",[t._v('Add an admin user if a new install or after an init\n/data/moloch/bin/moloch_add_user.sh admin "Admin User" THEPASSWORD --admin\n/data/moloch/bin/moloch_add_user.sh admin "zzh" zzh --admin')]),t._v(" "),e("li",[t._v("Start everything\na) If using upstart (Centos 6 or sometimes Ubuntu 14.04):\n/sbin/start molochcapture\n/sbin/start molochviewer\nb) If using systemd (Centos 7 or Ubuntu 16.04 or sometimes Ubuntu 14.04)\nsystemctl start molochcapture.service\nsystemctl start molochviewer.service")]),t._v(" "),e("li",[t._v("Look at log files for errors\n/data/moloch/logs/viewer.log\n/data/moloch/logs/capture.log")]),t._v(" "),e("li",[t._v("Visit http://MOLOCHHOST:8005 with your favorite browser.\nuser: admin\npassword: THEPASSWORD from step #6")])]),t._v(" "),e("ul",[e("li",[t._v("注意点：")])]),t._v(" "),e("ol",[e("li",[t._v("moloch 8005端口访问时候，浏览器版本（如chrome）需要较高的版本。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jasonish/docker-suricata",target:"_blank",rel:"noopener noreferrer"}},[t._v("suricata的docker版本"),e("OutboundLink")],1),t._v("\n远程pull\ndocker run --rm -it --net=host --cap-add=net_admin --cap-add=sys_nice jasonish/suricata:latest -i eth0\n本地生成(本地image：e242ba0cd124)\ndocker run --rm -it --net=host --cap-add=net_admin --cap-add=sys_nice e242ba0cd124 -i eth0"),e("br"),t._v("\ndocker run  -it --net=host --cap-add=net_admin --cap-add=sys_nice -v $(pwd)/logs:/var/log/suricata  -d  e242ba0cd124  -i eth0")]),t._v(" "),e("li",[t._v("crontab #定时删除日志文件\n0 */12 * * * find /data/suricata -mtime +10 -type f | xargs rm -rf")])])])},[],!1,null,null,null);a.default=o.exports}}]);
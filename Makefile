PKG=org.cfhp.hcardimport
IPK=$(PKG)_0.1.0_all.ipk

package: $(IPK)

clean:
	rm $(IPK)

$(IPK):
	palm-package -X excludes .

install: $(IPK)
	palm-install -d tcp $(IPK)

launch: install
	palm-launch $(PKG)

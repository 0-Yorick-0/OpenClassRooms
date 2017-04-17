<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
    method="html"
    encoding="UTF-8"
    indend="yes" >
  </xsl:output>

  <xsl:template match="/">
    <!-- Pour obtenir un document html5, on inscrit en dur la ligne "<!DOCTYPE html>"-->
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
      <html>
        <head>
  	       <title>Test des fonctions</title>
  	   </head>
    	<body>

          <h1>Test de la fonction value-of</h1>
    	    <p>Type de numéro : <xsl:value-of select="repertoire/personne[nom='POPPINS']/telephones/telephone/@type" ></xsl:value-of>
          </p>
          <p>Numéro : <xsl:value-of select="repertoire/personne[nom='POPPINS']/telephones/telephone" ></xsl:value-of>
          </p>

          <h1>Test de la fonction for-each</h1>
          <xsl:for-each select="repertoire/personne[nom='DOE']/emails/email">
            <p>Adresse mail : <xsl:value-of select="." ></xsl:value-of></p>
            <p>Type de l'adresse : <xsl:value-of select="@type" ></xsl:value-of></p>
          </xsl:for-each>

          <h1>Test de la fonction sort</h1>
            <xsl:for-each select="repertoire/personne">
              <xsl:sort select="nom" ></xsl:sort>
              <xsl:sort select="prenom" ></xsl:sort>
              <p><xsl:value-of select="nom" ></xsl:value-of>
              &#160;
              <xsl:value-of select="prenom" ></xsl:value-of></p>
            </xsl:for-each>

          <h1>Test de la fonction if</h1>
            <xsl:for-each select="repertoire/personne">
              <xsl:if test="@sexe = 'masculin'">
                <p><xsl:value-of select="nom"></xsl:value-of>&#160;
                <xsl:value-of select="prenom"></xsl:value-of></p>
              </xsl:if>
            </xsl:for-each>

            <h1>Test de la fonction choose</h1>
              <xsl:for-each select="repertoire/personne">
                <xsl:choose>
                  <xsl:when test="nom = 'DOE'">
                    <p>Bonjour John</p>
                  </xsl:when>
                  <xsl:when test="nom = 'POPPINS'">
                    <p>I hate that movie</p>
                  </xsl:when>
                  <xsl:otherwise>
                    <p>Qui êtes-vous?</p>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:for-each>
    	</body>
    </html>
  </xsl:template>

</xsl:stylesheet>

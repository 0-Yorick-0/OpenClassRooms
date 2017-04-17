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
        <title>Les variables</title>
      </head>

      <body>
        <h1>Test des variables</h1>
        <xsl:for-each select="repertoire/personne">

          <!-- Déclaration des variables-->
          <xsl:variable name="sexe" select="@sexe" />
          <xsl:variable name="nom" select="nom" />
          <xsl:variable name="prenom" select="prenom" />

          <p>Nom : <xsl:value-of select="$nom"/>&#160;
          Prénom : <xsl:value-of select="$prenom"/>&#160;
          Sexe : <xsl:value-of select="$sexe"/></p>
        </xsl:for-each>
      </body>
    </html>

  </xsl:template>
</xsl:stylesheet>

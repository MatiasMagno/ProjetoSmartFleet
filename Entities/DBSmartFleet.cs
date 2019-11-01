using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SmartFleet.Entities
{
    public partial class DBSmartFleet : DbContext
    {
        public DBSmartFleet()
        {
        }

        public DBSmartFleet(DbContextOptions<DBSmartFleet> options)
            : base(options)
        {
        }

        public virtual DbSet<Abastecimento> Abastecimento { get; set; }
        public virtual DbSet<Aluguel> Aluguel { get; set; }
        public virtual DbSet<Colaborador> Colaborador { get; set; }
        public virtual DbSet<Exame> Exame { get; set; }
        public virtual DbSet<Manutencao> Manutencao { get; set; }
        public virtual DbSet<ManutencaoProduto> ManutencaoProduto { get; set; }
        public virtual DbSet<Multa> Multa { get; set; }
        public virtual DbSet<Passageiro> Passageiro { get; set; }
        public virtual DbSet<PessoaJuridica> PessoaJuridica { get; set; }
        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Seguro> Seguro { get; set; }
        public virtual DbSet<Sinistro> Sinistro { get; set; }
        public virtual DbSet<TipoColaborador> TipoColaborador { get; set; }
        public virtual DbSet<TipoCombustivel> TipoCombustivel { get; set; }
        public virtual DbSet<Transporte> Transporte { get; set; }
        public virtual DbSet<UnidadeFederacao> UnidadeFederacao { get; set; }
        public virtual DbSet<Veiculo> Veiculo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=PC-JADIR;Initial Catalog=SmartFleet;Integrated Security=False;User ID=sa;Password=1qaz2wsx;Connect Timeout=15;Encrypt=False;TrustServerCertificate=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Abastecimento>(entity =>
            {
                entity.HasKey(e => e.IdeAbastecimento);

                entity.Property(e => e.DatAbastecimento).HasColumnType("date");

                entity.Property(e => e.QtdAbastecimento).HasColumnType("decimal(6, 3)");

                entity.Property(e => e.VlrAbastecimento).HasColumnType("decimal(12, 2)");

                entity.HasOne(d => d.PessoaJuridica)
                    .WithMany(p => p.Abastecimento)
                    .HasForeignKey(d => d.IdePessoaJuridica)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AbastecimentoPessoaJuridica");

                entity.HasOne(d => d.TipoCombustivel)
                    .WithMany(p => p.Abastecimento)
                    .HasForeignKey(d => d.IdeTipoCombustivel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AbastecimentoTipoCombustivel");

                entity.HasOne(d => d.Veiculo)
                    .WithMany(p => p.Abastecimento)
                    .HasForeignKey(d => d.IdeVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AbastecimentoVeiculo");
            });

            modelBuilder.Entity<Aluguel>(entity =>
            {
                entity.HasKey(e => e.IdeAluguel);

                entity.Property(e => e.DscObservacao)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.DscVeiculo)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.DthDevolucao).HasColumnType("datetime");

                entity.Property(e => e.DthSolicitacao).HasColumnType("datetime");

                entity.Property(e => e.NumNotaFiscal)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.VrlNotaFiscal).HasColumnType("decimal(12, 2)");

                entity.HasOne(d => d.PessoaJuridica)
                    .WithMany(p => p.Aluguel)
                    .HasForeignKey(d => d.IdePessoaJuridica)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AluguelPessoaJuridica");
            });

            modelBuilder.Entity<Colaborador>(entity =>
            {
                entity.HasKey(e => e.IdeColaborador);

                entity.Property(e => e.DatNascimento).HasColumnType("date");

                entity.Property(e => e.DatValidadeCNH).HasColumnType("date");

                entity.Property(e => e.DscEmail)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.IdcCategoriaCNH)
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcSexo)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcSituacao)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.NomColaborador)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NomMae)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NomPai)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NumCNH)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.NumCPF)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.NumCelular)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.NumMatricula)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.NumTelefone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.TipoColaborador)
                    .WithMany(p => p.Colaborador)
                    .HasForeignKey(d => d.IdeTipoColaborador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ColaboradorTipoColaborador");

                entity.HasOne(d => d.UnidadeFederacaoCNH)
                    .WithMany(p => p.Colaborador)
                    .HasForeignKey(d => d.IdeUnidadeFederacaoCNH)
                    .HasConstraintName("FK_ColaboradorUnidadeFederacao");
            });

            modelBuilder.Entity<Exame>(entity =>
            {
                entity.HasKey(e => e.IdeExame)
                    .HasName("PK_EXAME");

                entity.Property(e => e.CodExame)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DatExame).HasColumnType("date");

                entity.Property(e => e.DscObservacao)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.NomMedico)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.NumCRMMedico)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.Colaborador)
                    .WithMany(p => p.Exame)
                    .HasForeignKey(d => d.IdeColaborador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ExameColaborador");

                entity.HasOne(d => d.Laboratorio)
                    .WithMany(p => p.Exame)
                    .HasForeignKey(d => d.IdeLaboratorio)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ExamePessoaJuridica");

                entity.HasOne(d => d.UFCRMMedico)
                    .WithMany(p => p.Exame)
                    .HasForeignKey(d => d.IdeUFCRMMedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ExameUnidadeFederacao");
            });

            modelBuilder.Entity<Manutencao>(entity =>
            {
                entity.HasKey(e => e.IdeManutencao);

                entity.Property(e => e.DscManutencao)
                    .HasMaxLength(2000)
                    .IsUnicode(false);

                entity.Property(e => e.DthEntrada).HasColumnType("datetime");

                entity.Property(e => e.DthSaida).HasColumnType("datetime");

                entity.Property(e => e.IdcTipoManutencao)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.HasOne(d => d.Colaborador)
                    .WithMany(p => p.Manutencao)
                    .HasForeignKey(d => d.IdeColaborador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ManutencaoColaborador");

                entity.HasOne(d => d.Veiculo)
                    .WithMany(p => p.Manutencao)
                    .HasForeignKey(d => d.IdeVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ManutencaoVeiculo");
            });

            modelBuilder.Entity<ManutencaoProduto>(entity =>
            {
                entity.HasKey(e => e.IdeManutencaoProduto);

                entity.HasOne(d => d.Manutencao)
                    .WithMany(p => p.ManutencaoProduto)
                    .HasForeignKey(d => d.IdeManutencao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ManutencaoProdutoManutencao");

                entity.HasOne(d => d.Produto)
                    .WithMany(p => p.ManutencaoProduto)
                    .HasForeignKey(d => d.IdeProduto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ManutencaoProdutoProduto");
            });

            modelBuilder.Entity<Multa>(entity =>
            {
                entity.HasKey(e => e.IdeMulta);

                entity.Property(e => e.DatInfracao).HasColumnType("date");

                entity.Property(e => e.DatVencimento).HasColumnType("date");

                entity.Property(e => e.DscInfracao)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.DscLocalInfracao)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.NumAutoInfracao)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.VlrAutuacao).HasColumnType("decimal(12, 2)");

                entity.Property(e => e.VlrDesconto).HasColumnType("decimal(12, 2)");

                entity.HasOne(d => d.Veiculo)
                    .WithMany(p => p.Multa)
                    .HasForeignKey(d => d.IdeVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MultaVeiculo");
            });

            modelBuilder.Entity<Passageiro>(entity =>
            {
                entity.HasKey(e => e.IdePassageiro);

                entity.HasOne(d => d.Colaborador)
                    .WithMany(p => p.Passageiro)
                    .HasForeignKey(d => d.IdeColaborador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PassageiroColaborador");

                entity.HasOne(d => d.Transporte)
                    .WithMany(p => p.Passageiro)
                    .HasForeignKey(d => d.IdeTransporte)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PassageiroTransporte");
            });

            modelBuilder.Entity<PessoaJuridica>(entity =>
            {
                entity.HasKey(e => e.IdePessoaJuridica);

                entity.Property(e => e.DscEmail)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.DscLogradouro)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NomBairro)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.NomCidade)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.NomFantasia)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.NomRazaoSocial)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NumCEP)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.NumCNPJ)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.NumInscricaoEstadual)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NumLogradouro)
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.NumTelefone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.UFEndereco)
                    .WithMany(p => p.PessoaJuridica)
                    .HasForeignKey(d => d.IdeUFEndereco)
                    .HasConstraintName("FK_PessoaJuridicaUnidadeFederacao");
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.HasKey(e => e.IdeProduto);

                entity.Property(e => e.CodProduto)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.NomProduto)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Seguro>(entity =>
            {
                entity.HasKey(e => e.IdeSeguro)
                    .HasName("PK_SEGURO");

                entity.Property(e => e.DatContratacao).HasColumnType("date");

                entity.Property(e => e.DatVigenciaFim).HasColumnType("date");

                entity.Property(e => e.DatVigenciaInicio).HasColumnType("date");

                entity.Property(e => e.NumApolice)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.VlrFranquia).HasColumnType("decimal(12, 2)");

                entity.Property(e => e.VlrSeguro).HasColumnType("decimal(12, 2)");

                entity.HasOne(d => d.Seguradora)
                    .WithMany(p => p.Seguro)
                    .HasForeignKey(d => d.IdeSeguradora)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SeguroPessoaJuridica");

                entity.HasOne(d => d.Veiculo)
                    .WithMany(p => p.Seguro)
                    .HasForeignKey(d => d.IdeVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SeguroVeiculo");
            });

            modelBuilder.Entity<Sinistro>(entity =>
            {
                entity.HasKey(e => e.IdeSinistro);

                entity.Property(e => e.DatOcorrencia).HasColumnType("date");

                entity.Property(e => e.DscObservacao)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IdcTipoSinistro)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.HasOne(d => d.Seguro)
                    .WithMany(p => p.Sinistro)
                    .HasForeignKey(d => d.IdeSeguro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SinistroSeguro");
            });

            modelBuilder.Entity<TipoColaborador>(entity =>
            {
                entity.HasKey(e => e.IdeTipoColaborador)
                    .HasName("PK_TIPOCOLABORADOR");

                entity.Property(e => e.IdeTipoColaborador).ValueGeneratedNever();

                entity.Property(e => e.DscTipoColaborador)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoCombustivel>(entity =>
            {
                entity.HasKey(e => e.IdeTipoCombustivel);

                entity.Property(e => e.IdeTipoCombustivel).ValueGeneratedNever();

                entity.Property(e => e.DscTipoCombustivel)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Transporte>(entity =>
            {
                entity.HasKey(e => e.IdeTransporte);

                entity.Property(e => e.DscLocalDestino)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.DscLocalOrigem)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.DscObservacao)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.DthChegada).HasColumnType("datetime");

                entity.Property(e => e.DthInclusao).HasColumnType("datetime");

                entity.Property(e => e.DthPartida).HasColumnType("datetime");

                entity.Property(e => e.DthSolicitacao).HasColumnType("datetime");

                entity.HasOne(d => d.Motorista)
                    .WithMany(p => p.Motorista)
                    .HasForeignKey(d => d.IdeMotorista)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TransporteMotorista");

                entity.HasOne(d => d.Solicitante)
                    .WithMany(p => p.Solicitante)
                    .HasForeignKey(d => d.IdeSolicitante)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TransporteSolicitante");

                entity.HasOne(d => d.Veiculo)
                    .WithMany(p => p.Transporte)
                    .HasForeignKey(d => d.IdeVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TransporteVeiculo");
            });

            modelBuilder.Entity<UnidadeFederacao>(entity =>
            {
                entity.HasKey(e => e.IdeUnidadeFederacao)
                    .HasName("PK_UNIDADEFEDERACAO");

                entity.Property(e => e.NomUnidadeFederacao)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SigUnidadeFederacao)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Veiculo>(entity =>
            {
                entity.HasKey(e => e.IdeVeiculo)
                    .ForSqlServerIsClustered(false);

                entity.HasIndex(e => e.NumChassi)
                    .HasName("IDX_NumChassi")
                    .IsUnique();

                entity.HasIndex(e => e.NumPlaca)
                    .HasName("IDX_NumPlaca")
                    .IsUnique();

                entity.Property(e => e.CodRenavam)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DscCorPredominante)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DscMarcaModelo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DscTipo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdcBiodiesel)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcDiesel)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcEletrico)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcEtanol)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcGNV)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcGasolina)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.IdcSituacao)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.NumAnoFab)
                    .IsRequired()
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.NumAnoMod)
                    .IsRequired()
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.NumChassi)
                    .IsRequired()
                    .HasMaxLength(17)
                    .IsUnicode(false);

                entity.Property(e => e.NumPlaca)
                    .IsRequired()
                    .HasMaxLength(7)
                    .IsUnicode(false);
            });
        }
    }
}
